import React from 'react';

import './ToDo.css';
import EditInput from "../EditInput/EditInput";

class toDo extends React.Component{
    constructor(props){
        super(props);
        this.completeToDo = this.completeToDo.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.inpChange = this.inpChange.bind(this);
        this.clickForEdit = this.clickForEdit.bind(this);
        this.state = {
            statusFlag : false,
            editFlag: false,
            inputVal: '',
            isEdited: false,
        }
    }

    completeToDo() {
        this.setState({
            statusFlag: !this.state.statusFlag,
        })
    }

    editToDo() {
        this.setState({
            editFlag: !this.state.editFlag,
            inputVal: '',
        })
    }

    clickForEdit() {
        if(this.state.inputVal) {
            this.editToDo();
            this.props.sub(this.state.inputVal, this.props.id)
        }

    }
    inpChange(event) {
        this.setState({
            inputVal: event.target.value,
        })
    }

    render() {
        return (
            (this.state.editFlag && <EditInput value={this.state.inputVal} changeF={this.inpChange} clickF={this.clickForEdit} btnName ={'Update'} clasNam={'update-edit-inp'}/>)
            || <div className='to-do-box'>
                    <div className='to-do-box-top'>
                        <p className='to-do-titel'>
                            {this.props.titel}
                        </p>
                        <img src={require('../Img/edit.png') } onClick={this.editToDo} alt=''/>
                    </div>

                    {(this.state.statusFlag
                        && <span className='to-do-badge to-do-badge-done' onClick={this.completeToDo}> Done </span>)
                    || <span className='to-do-badge to-do-badge-new' onClick={this.completeToDo}> New </span>}
                </div>
        )
    }
}

export default toDo;