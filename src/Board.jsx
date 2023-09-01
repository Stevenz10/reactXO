import React from 'react'
import Square from './Square'
import { useState } from 'react'

export default function Board({ xIsNext, squares, onPlay }) {

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    function handleClick(id,xIsNext) {
        const nextSquares = squares.slice();
        if(squares[id] || calculateWinner(squares)){
            return;
        }
        if (xIsNext) {
            nextSquares[id] = "X";
        } else {
            nextSquares[id] = "O";
        }
        onPlay(nextSquares);
      }

      function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

  return (
    <div>
        <div className="status">{status}</div>
        <div className='board-row'>
            <Square value={squares[0]} onSquareClick={() =>handleClick(0,xIsNext)}/>
            <Square value={squares[1]} onSquareClick={() =>handleClick(1,xIsNext)}/>
            <Square value={squares[2]} onSquareClick={() =>handleClick(2,xIsNext)}/>
        </div>
        <div className='board-row'>
            <Square value={squares[3]} onSquareClick={() =>handleClick(3,xIsNext)}/>
            <Square value={squares[4]} onSquareClick={() =>handleClick(4,xIsNext)}/>
            <Square value={squares[5]} onSquareClick={() =>handleClick(5,xIsNext)}/>
        </div>  
        <div className='board-row'>
            <Square value={squares[6]} onSquareClick={() =>handleClick(6,xIsNext)}/>
            <Square value={squares[7]} onSquareClick={() =>handleClick(7,xIsNext)}/>
            <Square value={squares[8]} onSquareClick={() =>handleClick(8,xIsNext)}/>
        </div>
    </div>
  )
}
