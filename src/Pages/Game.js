import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { paperImage, rockImage, scissorImage } from '../images'
import './game.css'

const Game = ({ score, myChoice, setScore }) => {
    const [house, setHouse] = useState("")
    const [playerWin, setPlayerWin] = useState("")
    const [counter, setCounter] = useState(3)

    const newHousePick = () => {
        const choices = ['paper', 'scissor', 'rock']
        setHouse(choices[Math.floor(Math.random() * 3)])
    }
    const getMyChoice = () => {
        if (myChoice === 'scissors') return scissorImage
        if (myChoice == 'paper') return paperImage
        if (myChoice === 'rock') return rockImage

    }

    const getOpponent = () => {
        if (house === 'scissor') return scissorImage
        if (house == 'paper') return paperImage
        if (house === 'rock') return rockImage
    }

    useEffect(() => {
        newHousePick()
    }, [])

    const Result = () => {
        if (myChoice === 'rock' && house === "scissors") {
            setPlayerWin("won")
            setScore(score + 1)
        } else if (myChoice === 'rock' && house === "paper") {
            setPlayerWin('loose')
            setScore(score - 1)
        } else if (myChoice === "scissors" && house === "paper") {
            setPlayerWin("won");
            setScore(score + 1);
        } else if (myChoice === "scissors" && house === "rock") {
            setPlayerWin("loose");
            setScore(score - 1);
        } else if (myChoice === "paper" && house === "rock") {
            setPlayerWin("won");
            setScore(score + 1);
        } else if (myChoice === "paper" && house === "scissors") {
            setPlayerWin("loose");
            setScore(score - 1);
        } else {
            setPlayerWin("draw");
        }

    }

    useEffect(() => {
        Result()
    }, [house])

    return (
        <div className='game'>
            <div className='gamewinner'>
            
            <div>
            <p className='text'>you:</p>
                 {
                <img src={getMyChoice()}
                    style={{
                        width: "200px",
                        height: "200px",
                        marginTop:'30px'
                    }}

                />
            } </div>
            <br />
           
           
           <div> <p className='text'>Opponent:</p>  
           
            <img src={getOpponent()}
                style={{
                    width: "200px",
                    height: "200px",
                    marginTop:'30px'
                }}
            />
            </div>
            </div>
            <br />
            <div className='playerwin'>
            {playerWin === "won" && <h2>You won</h2>}
            {playerWin === "loose" && <h2>You loose</h2>}
            {playerWin === "draw" && <h2>You Draw</h2>}</div>

            <div className='button'><Link to='/' onClick={() => setHouse()}>Play Again</Link></div>
        </div>
    )
}

export default Game