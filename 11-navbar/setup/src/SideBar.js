import React from 'react'

function SideBar({array}) {
  return (
    <>
      {array.map(link => {
        const {id, url, text} = link;
        return (
        <li key={id}>
          <a href={url} >{text}</a>
        </li>
        );
      })}
    </>
  )
}

export default SideBar
