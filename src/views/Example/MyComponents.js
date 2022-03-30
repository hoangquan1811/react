import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Hoang Quan',
        channel: 'facebook.com/hoangquan1811'
    }

    handleClickButton = () => {
        console.log('hit the button')
        alert('Hello')
    }

    handleOnChangeName = (event) => {
        console.log(event.target.value);
        console.log('event target: ', event.target);
        console.log('event object: ', event);
        this.setState({
            name: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                    My name is {this.state['name']}
                </div>
                <div className="second">My link facebook is: {this.state.channel}</div>
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        );
    }
}

export default MyComponents;