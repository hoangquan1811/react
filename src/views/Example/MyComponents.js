import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Hoang Quan',
        channel: 'facebook.com/hoangquan1811'
    }

    render() {

        return (
            <>
                <div className="Hello">hello </div>
                <div className="name">{this.state.name}</div>
                <div className="channel">{this.state.channel}</div>
            </>
        );
    }
}

export default MyComponents;