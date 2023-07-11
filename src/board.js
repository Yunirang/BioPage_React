import './App.css';
import React from 'react';
import { useState } from 'react';
import data from './advisorsMockData.json';
import calculateWinner from './calculateWinner.js';   


function Square({ value, onSquareClick }) {

  // null is the initial value before {value} is passed
  // /u00A0 is a non-breaking space (usefull for formatting useful spaces), u2009 is a thin space, u2006 is a sixth space, u2008 is a punctuation space
  // eslint-disable-next-line no-useless-concat
  
  // can only return single JSX element
  // <> and </> are called fragments

  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}


function Board(){

    const [xIsNext, setXIsNext] = useState(true);
  
    const xSpace = '\u00A0\u2009\u2006';
    const [squares, setSquares] = useState(Array(9).fill(xSpace));
  
    function handleClick(i){
      if (squares[i] !== xSpace || calculateWinner(squares)) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext){
        nextSquares[i] = 'X';
      } else {
        nextSquares[i] = 'O';
      }
      setSquares(nextSquares);
      //changes turns
      setXIsNext(!xIsNext);
    }
  
    const winner = calculateWinner(squares);
    let status;
    if (winner){
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </>
    )
  }


  export default Board;