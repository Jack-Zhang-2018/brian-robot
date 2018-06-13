import React, { Component } from 'react';


class Bbot extends Component {
    handleChange(e){
        this.props.updateText(e.target.value)
    }

render() {
    return (
        <div>
            <p>Bad Robot</p>
            <p>I hear you saying {this.props.blah}. Is that correct?</p>
        </div>
    );
}
}

export default Bbot;
