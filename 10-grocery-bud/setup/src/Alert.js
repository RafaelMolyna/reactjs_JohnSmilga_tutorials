import React from 'react'

const Alert = function({type, msg}) {
  

  return (
    <p className={`alert alert-${type}`}>
      {msg}
    </p>
  )
}

export default Alert
