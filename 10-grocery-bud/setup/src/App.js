import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function getList() {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

function App() {
  const [name, set_name] = useState('');
  const [list, set_list] = useState(getList());
  const [isEditing, set_isEditing] = useState(false);
  const [editIndex, set_editIndex] = useState(null);
  const [alert, set_alert] = useState({msg: '', type: ''});
  const [alertShow, set_alertShow] = useState(false);

  const showAlert = function(type = alert.type, msg = alert.msg) {
    Promise.resolve(
      set_alertShow(false)
    ).then(() => {
      set_alert({msg, type});
      set_alertShow(true);
    });
  }

  const clearList = function() {
    set_list([]);
    showAlert('danger', 'list is empty');
  }
  
  const handleSubmit = function(e) {
    e.preventDefault();
    if (!name) {
      showAlert('danger', 'please enter some value');
    } else if (isEditing) {
      showAlert('success', 'value changed!');
      const newList = list.map(e => {return {...e}})
      newList[editIndex].title = name;
      set_list(newList);
      set_isEditing(null);
      set_name('');
    } else {
      const newItem = {
        id: Math.floor(Math.random()*1e5).toString(),
        title: name,
      }
      set_list([...list, newItem]);
      showAlert('success', 'item added');
      set_name('');
    }
  }

  const editItem = function(id) {
    let index = list.findIndex(item => item.id === id);
    set_editIndex(index);
    set_isEditing(true);
    set_name(list[index].title);
  }

  const removeItem = function(id) {
    showAlert('danger', 'item removed');
    set_list(oldList => {
      let newList = oldList.filter(elem => elem.id !== id);
      return newList;
    })
  }


  const escCallback = (event) => {
    if (event.keyCode === 27) {
      set_isEditing(null);
      set_name('');
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', escCallback);
    return () => {
      document.removeEventListener('keydown', escCallback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  
  useEffect(() => {
    const timer1 = setTimeout(() => {
       set_alertShow(false);
    }, 3000);
    setTimeout(() => {
      set_alert({msg: alert.msg, type: 'fading'});
    }, 0);
    return () => {
      clearTimeout(timer1);
    }
  }, [alertShow]);

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alertShow && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className='grocery'
                 placeholder='e.g. eggs' value={name}
                 onChange={(e) => set_name(e.target.value)}
                 onKeyDown={escCallback} />
          <button type='submit' className='submit-btn' >
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        {list.length > 0 && (
          <>
            <List itemsArr={list} {...{showAlert, set_list, editItem, removeItem}} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </>
          )
        }
      </div>
    </section>
  );
}

export default App
