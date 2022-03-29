import React from "react";

class MyComponents extends React.Component {

    state = {
        name: 'Hoang Quan',
        channel: 'facebook.com/hoangquan1811'
    }

    render() {

        let name = 'Hoang Quan';

        return (
            <>
                <div className="Hello">hello </div>
                <div className="name">{this.state.name}</div>
            </>
        );
    }
}

export default MyComponents;