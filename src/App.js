import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Map from './Components/map';
import mapStyle from './mapStyle.json'
import Header from './Components/Header'
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

  // Fetching data about Japanese restaurants in Warsaw from ZOMATO API
  getZomatoData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc/',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': '2993ad9395ee17dae3ca81552220ac5b'
    }})
    // parses response to JSON
    .then((response) => {
      return response.json();
    })
    .then(fromJSON => {
    // Getting array of data[20 restaurants] and setting it as state
    const allRestaurants = fromJSON.restaurants
      this.setState({
        allRestaurants: allRestaurants
      })
    })
    .catch((error) => {
      console.error(`Fetch Error =\n`, error);
      this.setState({
        error: true
        })
      });
  };


  render() {
    return (
      <div className="App">
        <Header />
        <Map style={mapStyle} allRestaurants={this.state.allRestaurants}/>
        <Footer />
      </div>
    );
  }
}

export default App;
//
// zomatorequest:
// curl -X GET --header "Accept: application/json" --header "user-key: 2993ad9395ee17dae3ca81552220ac5b" "https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc"
