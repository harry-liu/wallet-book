import React from 'react';

const selectOption = [
    {
        value: "food"
    },
    {
        value: "drink"
    },
    {
        value: "transport"
    },
];

class Add extends React.Component{
    selectedValue = 0;
    money = 0;

    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="add">
                <select name="type" id="select" onChange={this.onSelectChange} value={"food"}>
                    {selectOption.map(option => <option key={option.value} value={option.value}>{option.value}</option>)}
                </select>
                <input type="text" onChange={this.onInputChange}/>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }

    onSelectChange = (e) => {
        e.preventDefault();
        this.selectedValue = e.target.value
    };

    onInputChange = (e) => {
        e.preventDefault();
        this.money = e.target.value
    };

    add = () => {
        this.props.add(this.selectedValue, this.money)
    }
}

export default Add;