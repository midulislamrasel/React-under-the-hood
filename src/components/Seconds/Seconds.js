import React from 'react';
import MiniSeconds from '../MiniSeconds/MiniSeconds';

const Seconds = (props) => {
    return (
        <div>
            <p>Seconds {props.state}</p>
            <MiniSeconds state = {props.state}></MiniSeconds>
        </div>
    );
};

export default Seconds;