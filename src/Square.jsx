import React from 'react'

export default function Square({value,onSquareClick,highlight}) {
  return (
    highlight ? (<button className='square highlight' onClick={onSquareClick}>{value}</button>):(<button className='square' onClick={onSquareClick}>{value}</button>)
  )
}
