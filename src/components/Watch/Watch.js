import React from 'react';
import Minuts from '../Minuts/Minuts';

const Watch = (props) => {
    return (
        <div>
            <p>Watch : {props.state}</p>
            <Minuts state = {props.state}></Minuts>
        </div>
    );
};

export default Watch;