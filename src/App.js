import React,{useState} from "react"
import Header from "./Pages/Header"
import Play from "./Pages/Play"
import Game from "./Pages/Game"

import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {
  const [myChoice,setMyChoice]=useState("")
  
  const [score,setScore]=useState(0)
  const [total, setTotal] = useState(0);
  return (
    <>
    <div className="container">
      <Header score={score}>
        <Routes>
          <Route exact path='/' element={<Play
          setMyChoice={setMyChoice}
          />} />
          <Route  path="/game" element={
            <Game myChoice={myChoice} score={score} setScore={setScore} />
            
          }/>

        </Routes>
      </Header>
      
    </div></>
  );

}

export default App;
