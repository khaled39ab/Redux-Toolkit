import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div style={{border: '5px solid black', padding: '2rem', margin: '2rem'}}>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => { dispatch(increaseByAmount(5)) }}>IncrementBy5</button>
        </div>
    );
};

export default CounterView;