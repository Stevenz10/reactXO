import React from 'react'
import Square from './Square'

export default function Board({ xIsNext, squares, onPlay }) {
    const winner = calculateWinner(squares);
    const board = []
    let status;
    if (winner) {
      if (winner.includes("draw")) {
        status = "Draw";
      } else {
        status = "Winner: " + winner[3];
      }
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    for (let i = 0; i < 3; i++) {
      const cols = [];
      for (let j = 0; j < 3; j++) {
        const id = i * 3 + j;
        if (winner && winner.includes(id)) {
          cols.push(
            <Square
              key={id}
              value={squares[id]}
              highlight={true}
              onSquareClick={() => handleClick(id, xIsNext)}
            />
          );
      }
      else{
        cols.push(
            <Square
              key={id}
              value={squares[id]}
              highlight={false}
              onSquareClick={() => handleClick(id, xIsNext)}
            />
          );
      }
    }
      board.push(<div key={i} className="board-row">{cols}</div>);
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
            lines[i].push(squares[a]); 
            return lines[i];
          }
          else if(!squares.includes(null)){
            return ["draw"];
          }
        }
        return null;
      }

  return (
    <div>
        <div className="status">{status}</div>
        {board}
    </div>
  )
}

