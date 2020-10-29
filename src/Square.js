import React from 'react';
import './Square.css';

function Square(props){
  return (
  <div id="Square"
       onClick={() => {
         if(props.value == null){
         props.setValues(props.i);
         props.toggleTurn();
         }
       }}>
    {props.value}
  </div>
);
}

export default Square;
