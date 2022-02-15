import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    // initialize state using constructor
    constructor(props) {
        super(props);

        this.state = { lat: null }

        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )
    }


    render() {
        return "Hello"
    }
}

ReactDOM.render(<App />, document.getElementById('root'));