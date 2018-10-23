import React from 'react';

import './Header.css';
import EditInput from "../EditInput/EditInput";

export default function ({arr,inpValue,change,click})  {
    return (
        <div className='header-main'>
            <p className='header-titel'>TO DO LIST</p>
            <p className='header-count'>
                Total
                <span className='count-of-todos'> {arr.length} </span>
                todo
            </p>
            <EditInput value={inpValue} changeF={change} clickF={click} btnName ={'Create'} clasNam={'create-edit-inp'}/>
        </div>
    )
}