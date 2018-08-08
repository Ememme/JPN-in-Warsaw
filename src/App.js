import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Map from './Components/map';
import mapStyle from './mapStyle.json'
import Footer from './Components/Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    allRestaurants: [],
    error: false
  }
  componentDidMount() {
    this.getZomatoData()
  }


  getZomatoData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': '2993ad9395ee17dae3ca81552220ac5b'
    }})
    .then((response) => {
      return response.json();
    })
    .then(fromJSON => {
    const allRestaurants = fromJSON.restaurants
      this.setState({
        allRestaurants: allRestaurants
      })
    })
  };


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
        {/* <Map style={mapStyle}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
//
// zomatorequest:
// curl -X GET --header "Accept: application/json" --header "user-key: 2993ad9395ee17dae3ca81552220ac5b" "https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc"
