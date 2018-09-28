import React, { Component } from 'react';
import '../asset/css/App.css';
import Header from './Header'
import Add from './Add'
import List from './List'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div className="App">
                {/*<Header/>*/}
                <Add add={this.add}/>
                {this.state.list.map(li => <List key={li.key} money={li.money} type={li.type}/>)}
            </div>
        );
    }

    add = (selectedValue, money) => {
        this.setState((preState) => {
            return {
                list: [...preState.list, {type: selectedValue, money, key: preState.list.length}]
            }
        })
    }
}

export default App;
