import React from 'react';
import Seconds from '../Seconds/Seconds';

const Minuts = (props) => {
    return (
        <div>
            <p>Minit : {props.state}</p>
            <Seconds state = {props.state}></Seconds>
        </div>
    );
};

export default Minuts;