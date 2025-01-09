import React from 'react'

function Button({ text, textColor, bgColor, handler = () => { } }) {
  return (
    <button
      // data-aos="fade-up"
      // data-aos-offset="100"
      className={`${bgColor} ${textColor} px-8 py-2 hover:scale-105 duration-200 relative z-40 cursor-pointer rounded-full`}>{text}</button>
  )
}

export default Button