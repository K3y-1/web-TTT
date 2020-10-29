import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

function checkWinner(matrix){
  let directions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i of directions){
    if(matrix[i[0]] === matrix[i[1]] && matrix[i[0]] === matrix[i[2]] && matrix[i[0]] !== null){
      return 1;
    }
  }
  return 0;
}

function Board() {
  const [vals, setVals] = useState([null, null, null, null, null, null, null, null, null]);
  const [turn, setTurn] = useState('X');

  function toggleTurn(){
    if(turn === 'X')
      setTurn('O');
    else if(turn === 'O')
      setTurn('X');
  }
  function setValues(i){
    let v = vals;
    v[i] = turn;
    setVals(v);
    if(checkWinner(v)){
      toggleTurn();
      alert("Game is finished,\nthe winner is:\n"+turn);
      setVals([null, null, null, null, null, null, null, null, null]);
      setTurn('X');
    }
  }

  let row, squares = [];
  for(let i = 0; i < 3; i++){
    row = [];
    for(let e = 0; e < 3; e++)
      row.push(<Square i={i*3 + e} value={vals[i*3 + e]} toggleTurn={toggleTurn} setValues={setValues}/>);
    squares.push(<div className="row">{row}</div>);
  }

  return [
  <p id="turn">{turn}</p>,
  <div className="Board">
    {squares}
  </div>
];
}

export default Board;
