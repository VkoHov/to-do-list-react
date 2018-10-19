import React from 'react';

import './Header.css';
import EditInput from "../EditInput/EditInput";

export default function (props)  {
    return (
        <div className='header-main'>
            <p className='header-titel'>TO DO LIST</p>
            <p className='header-count'>
                Total
                <span className='count-of-todos'> {props.arr.length} </span>
                todo
            </p>
            <EditInput value={props.inpValue} changeF={props.change} clickF={props.click} btnName ={'Create'} clasNam={'create-edit-inp'}/>
        </div>
    )
}