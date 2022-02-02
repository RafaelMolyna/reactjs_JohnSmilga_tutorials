import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, hexColor, index}) => {
  const [alert, set_alert] = useState(false);

  const bcg = rgb.join(',')
  const hex = rgbToHex(...rgb)
  const hexValue = `#${hexColor}`

  useEffect(() => {
    const timer = setTimeout(() => {
      set_alert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <article className={`color ${index > 10 && 'color-light'}`} 
             style={{backgroundColor: `rgb(${bcg})`}}
             onClick={() => {
               set_alert(true);
               navigator.clipboard.writeText(hexValue);
             }} >
      <p className="percent-value">{weight} </p>
      <p className="color-value">{hexValue} </p>
      {alert && <p className="alert">copied to clipboard</p> }
    </article>
  )
}

export default SingleColor
