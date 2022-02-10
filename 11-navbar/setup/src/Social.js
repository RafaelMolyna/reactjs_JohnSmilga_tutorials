import React from 'react'

function Social({array}) {
  return (
    <ul className="social-icons">
      {array.map(socialIcon => {
        const {id, url, icon} = socialIcon;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  )
}

export default Social