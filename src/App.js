import React, { Component } from 'react';
import Loading from './Components/Loading';
import Error from './Components/Error';
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
     // used for handling menu in Header
    menuOpen: false,
     // data from ZomatoAPI
    allRestaurants: [],
     // indication of error while loading ZomatoAPI
    error: false,
     // manages Loading Component
    isLoading: true,
     // restaurants filtered by district
    districtRestaurants: [],
     // flag for opening InfoWindow
    windowOpen: false,
     // id of clicked marker
    markerID: '',
     // restaurant connected to clicked marker
    selectedRestaurant: [],
   };

  this.toggleMenu = this.toggleMenu.bind(this)
 }
 // Function to check if map loaded correctly and set state accordingly
  mapLoaded() {
    setTimeout(() => {
      const mapLoaded = document.querySelector('iframe');
      if (!mapLoaded) {
        this.setState({
          error: true
        })
        console.log('Google map error')  
      }

    }, 5000);

  }
  // Function handles state of menu in Header Component
  toggleMenu() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  // Function for opening window based on clicked marker, finds a restaurant that is connected to that marker location and sets it as state
  openInfoWindow(markerID) {
    let place = this.state.districtRestaurants.filter((restaurant) => {
      return restaurant.restaurant.id === String(markerID)
    })

    this.setState({
      windowOpen: true,
      markerID: markerID,
      selectedRestaurant: place,
    })
  }

  closeInfoWindow() {
    this.setState({
      windowOpen: false,
      markerID: '',
      selectedRestaurant: [],
    })
  }
  // @Function filters restaurant localised in a given districtRestaurants
  // {params: value} is passed from SideBar Component
  findRestaurant(value){
    let all = this.state.allRestaurants
    let districtFiltered = all.filter((restaurant) => {
      if (value !== 'All') {
        return restaurant.restaurant.location.locality.includes(value)
      } else {
        return all
      }
    });
      this.setState({
        districtRestaurants: districtFiltered,
      })
 }


  componentDidMount() {
    console.log('---component did mount---')
    this.mapLoaded()
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
          error: true,
          isLoading: false
          })
        });
      }
  }

  render() {
    // If fetching data from ZOMATO will take long, user will see a screen
    console.log('--render--')

    if (this.state.isLoading) {
      return <Loading />
    } else {
      return (
        <div className="App">

          <Header toggleMenu={this.toggleMenu} menu={this.state.menuOpen}/>
          {/*SideBar will open depending on menuOpen value  */}
          <div className="wrapper">
          {this.state.menuOpen &&
            <aside className="sidebar">
            <SideBar
              menuOpen={this.state.menuOpen}
              locations={this.state.districtRestaurants}
              filter={this.findRestaurant.bind(this)}
              openInfoWindow={this.openInfoWindow.bind(this)}
              closeInfoWindow={this.closeInfoWindow.bind(this)}
            />
            </aside>
          }

          <Map style={mapStyle} allRestaurants={this.state.districtRestaurants}   loading={this.state.isLoading}
          menuOpen={this.state.menuOpen}
          openInfoWindow={this.openInfoWindow.bind(this)}
          closeInfoWindow={this.closeInfoWindow.bind(this)}
          windowOpen={this.state.windowOpen}
          markerID={this.state.markerID}
          selectedRestaurant={this.state.selectedRestaurant}
          />
          <Footer />

        </div>
        {this.state.error &&
          <Error />
        }
        </div>
        )
    }
  }
}

export default App;
//
// zomatorequest:
// curl -X GET --header "Accept: application/json" --header "user-key: 2993ad9395ee17dae3ca81552220ac5b" "https://developers.zomato.com/api/v2.1/search?entity_id=96681&entity_type=subzone&start=1&count=30&lat=52.22967&lon=21.0122287&radius=5000&cuisines=60&sort=rating&order=asc"
