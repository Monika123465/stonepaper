import React from 'react'
import "./Header.css"

const Header = ({score, children}) => {
  
  return (
    <div className='Header'>

      <h1>Score:{score}</h1>
      {children}
      
    </div>
  )
}

export default Header