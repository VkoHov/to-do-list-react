import React from 'react';

import './EditInput.css';

export default function (props) {
    return (
        <div className={props.clasNam + ' create-box'}>
            <input type="text" value={props.value} onChange={props.changeF} placeholder={'To DO text gose here'}/>
            <button className='create-btn' onClick={props.clickF}>{props.btnName}</button>
        </div>
    )
}

