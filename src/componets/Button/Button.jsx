import React from 'react'

function Button({text,textColor, bgColor, handler = () =>{}}) {
  return (
    <button className={`${bgColor} ${textColor} px-8 py-2 hover:scale-105 duration-200 relative z-40 cursor-pointer rounded-full`}>{text}</button>
  )
}

export default Button