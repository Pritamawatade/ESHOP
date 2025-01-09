import React from 'react'
import { Navigate, useNavigate } from 'react-router'
function Button({ text, textColor, bgColor, handler = () => { } }) {
  const navigate = useNavigate();
  return (
    <button
      // data-aos="fade-up"
      onClick={()=>navigate("/login")}
      // data-aos-offset="100"
      className={`${bgColor} ${textColor} px-8 py-2 hover:scale-105 duration-200 relative z-40 cursor-pointer rounded-full`}>{text}</button>
  )
}

export default Button