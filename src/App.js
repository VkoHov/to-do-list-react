import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import ToDo from "./ToDo/ToDo";

class App extends Component {
    constructor(props) {
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.inpChange = this.inpChange.bind(this);
        this.toDoListElChange = this.toDoListElChange.bind(this);
        this.state = {
            arrToDo: [],
            inputValue: ''
        }
    }

    inpChange(event) {
        this.setState({
            inputValue: event.target.value,
        })
    }
    id(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    addToDo() {
        if (this.state.inputValue !== '') {

            let changetoDoList = this.state.arrToDo;
            changetoDoList.unshift({title:this.state.inputValue, id: this.id()});
            this.setState({
                arrToDo: changetoDoList,
                inputValue: '',
            })
        }
    }

    toDoListElChange(value, index) {
        let arr = this.state.arrToDo;

        const objIndex = arr.findIndex((obj)=>{
            return obj.id === index;
        });
        arr[objIndex] = {title: value, id: index};
        this.setState({
            arrToDo: arr,
        });
    }

    render() {
        const {arrToDo, inputValue} = this.state;

        // const toDoList = arrToDo.map((obj, index) => <ToDo key={index} {...obj}/>);
        const toDoList = arrToDo.map((obj, index) => <ToDo title={obj.title} key={obj.id} sub={this.toDoListElChange}
                                                             id={obj.id}/>);

        return (
            <div className="App">
                <Header arr={arrToDo} inpValue={inputValue} change={this.inpChange} click={this.addToDo}/>
                {toDoList}
            </div>
        );
    }
}

export default App;
