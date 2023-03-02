
import React from 'react'
import { Link } from 'react-router-dom'
import { paperImage, rockImage, scissorImage } from '../images'
import "./play.css"


const Play = ({setMyChoice}) => {
    const setChoice=(choice)=>{
        setMyChoice(choice)
    }
  return (
    <div className='play'>
        <Link to='/game'>
            <div 
            onClick={() => setChoice('paper')}//hm chate haiki yaha paper scissor yesb ke jagah image jae
            className="icon icon--paper">
            <img src={paperImage}/></div>
        </Link>
        <Link to='/game'>
            <div data-id="scissors" 
            onClick={() => setChoice('scissors')}
            className="icon icon--scissors">
            <img src={scissorImage}/></div>
        </Link>
        <Link to='/game'>
            <div data-id="rock" 
            onClick={() => setChoice('rock')}
            className="icon icon--rock">
            <img src={rockImage}/></div>
        </Link>
        </div>
  )
}

export default Play