import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
import './TicTacToe.css'

let data = ['', '', '', '', '', '', '', '', '']

const TicTacToe = () => {
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  let box1Ref = useRef()
  let box2Ref = useRef()

  let box3Ref = useRef()
  let box4Ref = useRef()
  let box5Ref = useRef()
  let box6Ref = useRef()
  let box7Ref = useRef()
  let box8Ref = useRef()
  let box9Ref = useRef()

  const boxArray = [
    box1Ref,
    box2Ref,
    box3Ref,
    box4Ref,
    box5Ref,
    box6Ref,
    box7Ref,
    box8Ref,
    box9Ref,
  ]
  const [title, setTitle] = useState(
    <>
      Tic Tac Toe in <span>React</span>
    </>
  )
  let titleRef = useRef(null)

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
    checkWin()
  }

  const checkWin = () => {
    console.log('check win called')
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[2])
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
      won(data[5])
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
      won(data[8])
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
      won(data[6])
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
      won(data[7])
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
      won(data[8])
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
      won(data[8])
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[2])
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
      won(data[6])
    }
  }

  const won = (winner) => {
    console.log('won called')
    setLock(true)
    if (winner === 'x') {
      setTitle(
        <>
          Congratulations <img src={cross_icon} /> Won
        </>
      )
    } else {
      setTitle(
        <>
          Congratulations <img src={circle_icon} /> Won
        </>
      )
    }
  }
  const reset = () => {
    setLock(false)
    data = ['', '', '', '', '', '', '', '', '']
    setTitle(
      <>
        Tic Tac Toe in <span>React</span>
      </>
    )
    boxArray.map((box)=>{if(box.current!=""){
      box.current.innerHTML = ""
    }})
  }

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        {title}
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" ref={box1Ref} onClick={(e) => toggle(e, 0)}></div>
          <div className="boxes" ref={box2Ref} onClick={(e) => toggle(e, 1)}></div>
          <div className="boxes" ref={box3Ref} onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4Ref} onClick={(e) => toggle(e, 3)}></div>
          <div className="boxes" ref={box5Ref} onClick={(e) => toggle(e, 4)}></div>
          <div className="boxes" ref={box6Ref} onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7Ref} onClick={(e) => toggle(e, 6)}></div>
          <div className="boxes" ref={box8Ref} onClick={(e) => toggle(e, 7)}></div>
          <div className="boxes" ref={box9Ref} onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>

      <button className="reset"  onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}

export default TicTacToe
