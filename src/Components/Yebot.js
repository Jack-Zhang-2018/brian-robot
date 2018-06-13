import React, { Component } from 'react';


class Yebot extends Component {
render() {
    return (
        <div>
            <p>Good Robot</p>
            <p>Im gonna let you finish but Beyonce is {this.props.saySomething}</p>
        </div>
    );
}
}

export default Yebot;
