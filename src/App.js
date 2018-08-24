import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import Loading from './Components/Loading';
import Map from './Components/map';
import mapStyle from './mapStyle.json'
import Header from './Components/Header'
import Footer from './Components/Footer'
import SideBar from './Components/SideBar'
import './App.css';

class App extends Component {

  constructor(props) {
   super(props)
   this.state = {
     menuOpen: false,
     allRestaurants: [],
     error: false,
     isLoading: true,
     districtRestaurants: [],
     windowOpen: false,
     markerID: '',
     clickedLocation: []
   };


  // this.openInfoWindow = this.openInfoWindow.bind(this)
  this.toggleMenu = this.toggleMenu.bind(this)
 }

  // Function handles state of menu in Header Component
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }
  openInfoWindow(markerID) {
    console.log(`Logging marker: ${markerID}`)
      let place = this.state.districtRestaurants.filter((restaurant) => {
        return restaurant.restaurant.id === String(markerID)
      })

    console.log(`Clicked restaurant: ${place}`)
    this.setState({
      windowOpen: true,
      markerID: markerID,
      selectedRestaurant: place
    })
  }
  // @Function filters restaurant localised in a given districtRestaurants
  // {params: value} is passed from SideBar Component
  findRestaurant(value){
    console.log(`Sidebar value ${value}`)
    let all = this.state.allRestaurants
    console.log(all)

    let districtRestaurantsF = all.filter((restaurant) => {
      if (value !== 'All') {
        return restaurant.restaurant.location.locality.includes(value)
      } else {
        return all
      }
    });
      console.log('Dictrict' + districtRestaurantsF.length)
      this.setState({
        districtRestaurants: districtRestaurantsF,
      })
 }


  componentDidMount() {
    console.log('---component did mount---')
    console.log(this.state)
    // Fetching data about Japanese restaurants in Warsaw from ZOMATO API.catch
    // As ZomatoAPI is turning results in batches of 20, loop is used to get info about all restaurants in the city.
    // Offset is 20
    let fetchedRestaurants = [];
    for(let i = 1; i <= 100; i += 20) {


      fetch("https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start="+i.toString()+"&count=20&lat=52.22967&lon=21.0122287&radius=10000&cuisines=60&sort=rating&order=asc", {
        headers: {
        Accept: "application/json",
        "User-Key": "2993ad9395ee17dae3ca81552220ac5b"
        }
       })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('There is a problem with getting ZOMATO data ...');
        }
      })
      // pushing intermediate fetch results to an array
      .then(resp => fetchedRestaurants.push(...resp.restaurants))
      .then(resp => {
        // checking condition for number of fetched restaurants
        if (fetchedRestaurants.length > 60) {
          // assigning ZOMATO data to state and switching off loading
          this.setState({
            allRestaurants: fetchedRestaurants,
            districtRestaurants: fetchedRestaurants,
            isLoading: false
          });
        }
      })
      .catch((error) => {
        console.error(`Fetch Error =\n`, error);
        this.setState({
          error: true
          })
        });
      }
  }





  render() {
    // If fetching data from ZOMATO will take long, user will see some image
    console.log('--render--')

    if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <div className="App">
          <Header toggleMenu={this.toggleMenu} menu={this.state.menuOpen}/>
          {/*SideBar will open depending on menuOpen value  */}
          {this.state.menuOpen &&
            <SideBar
              menuOpen={this.state.menuOpen}
              locations={this.state.districtRestaurants}
              filter={this.findRestaurant.bind(this)}
            />
          }

          <Map style={mapStyle} allRestaurants={this.state.districtRestaurants} loading={this.state.isLoading} openInfoWindow={this.openInfoWindow.bind(this)} windowOpen={this.state.windowOpen}
          markerID={this.state.markerID}
          selectedRestaurant={this.state.selectedRestaurant}
        />
          <Footer />
        </div>
        )
    }

  }



}

export default App;
//
// zomatorequest:
// curl -X GET --header "Accept: application/json" --header "user-key: 2993ad9395ee17dae3ca81552220ac5b" "https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc"
