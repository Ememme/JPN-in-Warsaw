import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Map from './Components/map';
import mapStyle from './mapStyle.json'
import Footer from './Components/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log(mapStyle)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Map style={mapStyle}/>
        <Footer />
      </div>
    );
  }
}

export default App;
