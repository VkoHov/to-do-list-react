import React, {Component} from 'react';
import './App.css';
import Header from "./Header/Header";
import ToDo from "./ToDo/ToDo";

class App extends Component {
    constructor(props){
        super(props);
        this.addToDo = this.addToDo.bind(this);
        this.inpChange = this.inpChange.bind(this);
        this.arrayElChange = this.arrayElChange.bind(this);
        this.state = {
            arrToDo: [],
            inputValue: ''
        }
    }

    inpChange (event) {
        this.setState({
            inputValue: event.target.value,
        })
    }

    addToDo() {
        if (this.state.inputValue !== ''){

            let changeArray = this.state.arrToDo;
            changeArray.unshift(this.state.inputValue);
            this.setState({
                arrToDo: changeArray,
                inputValue: '',
            })
        }
    }
    arrayElChange(value, index){

        let arr = this.state.arrToDo;
        arr[index] = value;
        this.setState({
            arrToDo: arr,
        })
        console.log(this.state.arrToDo)
    }
    render() {
        return (
            <div className="App">
                <Header arr={this.state.arrToDo} inpValue={this.state.inputValue} change={this.inpChange} click={this.addToDo} />
                {this.state.arrToDo.map((titel, index) => {
                    return (
                        <ToDo titel={titel} key={index} sub={this.arrayElChange} id={index}/>
                    )
                })}
            </div>
        );
    }
}

export default App;
