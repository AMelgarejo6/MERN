import React, { useState } from 'react';

const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div>{ count }</div>
            <button onClick={ handleClick }>Click me</button>
        </>
    );
}

export default Counter;