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

  // Fetching data about Japanese restaurants in Warsaw from ZOMATO API.catch
  // As ZomatoAPI is turning results in batches of 20, loop is used to get info about all restaurants in the city.
  // Offset is 20
  getZomatoData() {
    let fetchedRestaurants = [];
    for(let i = 1; i <= 80; i += 20) {
      fetch("https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start="+i.toString()+"&count=20&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc", {
        headers: {
        Accept: "application/json",
        "User-Key": "2993ad9395ee17dae3ca81552220ac5b"
       }
     })
    .then(resp => resp.json())
    // pushing intermediate fetch results to an array
    .then(respjs => fetchedRestaurants.push(...respjs.restaurants))
    .then(
    // After all 67 restaurant data is fetched, set it as state
      this.setState({
        allRestaurants: fetchedRestaurants
      })
    )
    .catch(error => console.error(`Fetch Error =\n`, error));
    }
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
