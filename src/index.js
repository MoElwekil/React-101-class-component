import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    // initialize state using constructor
    constructor(props) {
        super(props);

        this.state = { lat: null }
        console.log(this.state.lat);

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => console.log(err)
        )
    }


    render() {
        return (
            <div>Latitude: {this.state.lat}</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));