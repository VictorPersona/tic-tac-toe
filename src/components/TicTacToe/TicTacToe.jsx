import React, { useState } from 'react'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'
import './TicTacToe.css'

let data = ['', '', '', '', '', '', '', '', '']

const TicTacToe = () => {
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  const toggle = (e, num) => {
    if (lock == true) {
      return 0
    }
    if (count % 2 == 0) {
      e.target.innerHTML = `<img src= '${cross_icon}' >`
      data[num] = 'x'
      setCount(count + 1)
    } else {
      e.target.innerHTML = `<img src= '${circle_icon}' >`
      data[num] = 'o'
      setCount(count + 1)
    }
  }

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
          <div className="boxes" onClick={(e) => toggle(e, 9)}></div>
        </div>
      </div>

      <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
