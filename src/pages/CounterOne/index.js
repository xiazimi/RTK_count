import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseOne, decreaseOne } from './counterOneSlice';

const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.counterOne)
  return (
    <>
      <span>CountOne: {count}</span>
      <button style={{margin: '0 5px 0 15px'}} onClick={() => dispatch(increaseOne(1))}>+1</button>
      <button onClick={() => dispatch(decreaseOne(1))}>-1</button>
    </>
  ) 
}

export default Count;