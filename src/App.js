import React, { Component } from 'react';
import TextInput from './Components/TextInput'
import Gbot from './Components/Gbot'
import Bbot from './Components/Bbot'
import Yebot from './Components/Yebot'


class App extends Component {
    constructor(props){
    super(props)
    this.state = {
      saySomething: 'Bob',
      blah: ["B","L","A","H"]
    }
}

updateText(input) {
    this.setState({saySomething: input})
}



  render() {
    return (
        <div>
        <TextInput saySomething={this.state.saySomething} updateText={this.updateText.bind(this)} />
        <Gbot saySomething={this.state.saySomething}/>
        <Bbot saySomething={this.state.saySomething}/>
        <Yebot saySomething={this.state.saySomething}/>
        </div>
        );
    }
}

export default App
