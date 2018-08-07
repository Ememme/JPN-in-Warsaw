import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 52.229676,
      lng: 21.012229
    },
    zoom: 13,
  };


  mapOptions() {
  	return {
  		scrollwheel: true,
      // /*Source for map style: https://snazzymaps.com/style/12940/momentum  */

  		styles: this.props.style
  	}
  }



  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '90vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBGs0x8vuA1_EdLLtIQpFfoweEk2k-jcak' }}
          options={this.mapOptions.bind(this)}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
