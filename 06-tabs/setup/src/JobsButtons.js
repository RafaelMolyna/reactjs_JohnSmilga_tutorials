import React from 'react'

function JobsButtons({jobs, page, setPage}) {

  return (
    <div className="btn-container">
      {jobs.map((item, i) => {
          return (
            <button className={`job-btn ${i === page && 'active-btn'}`} 
                    key={item.id} 
                    onClick={() => {setPage(i)}} >
              {item.company}
            </button>
          );
        })}
    </div>
  )
}

export default JobsButtons
