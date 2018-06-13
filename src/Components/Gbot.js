import React, { Component } from 'react';


class Gbot extends Component {
render() {
    return (
        <div>
            <p>Good Robot</p>
            <p>I hear you saying {this.props.saySomething}. Is that correct?</p>
        </div>
    );
}
}

export default Gbot;
