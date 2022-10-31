import React from 'react';
import Counter from "./Counter"

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <Counter />
        </div>
    );
}

export default PersonCard;