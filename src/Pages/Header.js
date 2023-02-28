import React from 'react'

const Header = ({score}) => {
  return (
    <div className='Header'>
      <h1>Score:{score}</h1>
    </div>
  )
}

export default Header