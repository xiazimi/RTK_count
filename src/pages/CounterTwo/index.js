import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseTwo, decreaseTwo } from './counterTwoSlice';

const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counterTwo)
  return (
    <>
      <span>CountTwo: {count}</span>
      <button style={{margin: '0 5px 0 15px'}} onClick={() => dispatch(increaseTwo(2))}>+2</button>
      <button onClick={() => dispatch(decreaseTwo(2))}>-2</button>
    </>
  ) 
}

export default Count;