import React, { useState } from 'react';

const Input = props => {

    const [color, setColor] = useState();
    // const [colors, setColors] = useState([]);
    const {colors, setColors} = props;


    const addToColors = () => {
        const newColors = [...colors];
        newColors.push(color);
        setColors(newColors);
        setColor("");
    }
    return (
        <div>
            <p>{colors}</p>
            <p>{color}</p>
            <input value={color} onChange={ e => setColor(e.target.value) } type="text" />
            <button onClick={addToColors}>Add to colors</button>
            <p>Enter your favorite color!</p>
        </div>
    )
}

export default Input;