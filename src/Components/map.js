import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import InfoWindow from './InfoWindow'


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.229676,
      lng: 21.012229
    },
    zoom: 14,

  };

  mapOptions() {
  	return {
  		scrollwheel: true,
      // /*Source for map style: https://snazzymaps.com/style/12940/momentum  */
  		styles: this.props.style
  	}
  }

  render() {
    const { allRestaurants, loading, openInfoWindow } = this.props
    console.log(allRestaurants)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBGs0x8vuA1_EdLLtIQpFfoweEk2k-jcak' }}
          options={this.mapOptions.bind(this)}
          defaultCenter={this.props.center}
          // center={this.state.center}
          defaultZoom={this.props.zoom}
          onClick={this.props.closeInfoWindow}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave}
          allRestaurants={this.props.allRestaurants}
        >

          {/****************** MARKERS ********************/}
             {this.props.allRestaurants.map((item) =>
                 <Marker
                 key={item.restaurant.id}
                 lat={item.restaurant.location.latitude}
                 lng={item.restaurant.location.longitude}
                 markerID={item.restaurant.R.res_id}
                 restaurant={this.props.selectedRestaurant}
                 openInfoWindow={this.props.openInfoWindow}
                 />
             )}
              {this.props.windowOpen &&
               <InfoWindow key={this.props.id} restaurant={this.props.selectedRestaurant} openWindow={this.props.openInfoWindow} closeWindow={this.props.closeInfoWindow} marker={this.props.markerID} windowOpen={this.props.windowOpen} />
             }

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
