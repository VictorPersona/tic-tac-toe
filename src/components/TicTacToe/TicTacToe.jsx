import React, { useRef, useState } from 'react'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'
import './TicTacToe.css'

const TicTacToe = () => {
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(''))
  const [title, setTitle] = useState(
    <>
      Tic Tac Toe in <span>React</span>
    </>
  )
  let titleRef = useRef(null)

  const toggle = (index) => {
  
    if (lock || board[index] !== '') {
      return 0
    }
    const newBoard = [...board]
    newBoard[index] = count % 2 == 0 ? 'x' : 'o'
    setBoard(newBoard)
    setCount(count + 1)

    checkWin(newBoard)
  }

  const checkWin = (currentBoard) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        won(currentBoard[a])
        return
      }
    }
  }

  const won = (winner) => {
    setLock(true)
    setTitle(
      <>
        Congratulations
        <img src={winner == 'x' ? cross_icon : circle_icon} alt="winner_icon" />
        Won
      </>
    )
  }
  const reset = () => {
    setLock(false)
    setBoard(Array(9).fill(''))
    setCount(0)
    setTitle(
      <>
        Tic Tac Toe in <span>React</span>
      </>
    )
  }

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        {title}
      </h1>
      <div className="board">
        {[0, 1, 2].map((row) => (
          <div className={`row${row + 1}`} key={row}>
            {[0, 1, 2].map((col) => {
              const index = row * 3 + col
              return (
                <div
                  className="boxes"
                  key={index}
                  onClick={() => toggle(index)}
                >
                  {board[index] === 'x' && <img src={cross_icon} />}
                  {board[index] === 'o' && <img src={circle_icon} />}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <button className="reset" onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}

export default TicTacToe
