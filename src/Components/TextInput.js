import React, { Component } from 'react';

class TextInput extends Component {
    handleChange(e){
        console.log(this.props);
        this.props.updateText(e.target.value)
    }

    render() {
     return (
        <div>
            <h1>Robo Active Listening</h1>
            <p>Say Something </p>
            <input onChange={this.handleChange.bind(this)} />
        </div>
         );
       }
    }

 export default TextInput;
