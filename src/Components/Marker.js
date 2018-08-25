import React, { Component } from 'react';

class Marker extends Component {


  render(){
    const { windowOpen, openInfoWindow, allRestaurants, icon, markerID, restaurant, animate } = this.props
    let markerClass = ["marker"];

      if(windowOpen) {

        let restaurantID = this.props.restaurant[0].restaurant.R.res_id
        // Animate clicked marker via CSS class
        if(this.props.markerID === restaurantID)  {
          markerClass.push("bounce")
        }
      }


  return (

		<div className={markerClass.join(' ')} onClick={() => openInfoWindow(this.props.markerID)} >
  	</div>
	)
  }
}

export default Marker;
// logging marker () => console.log(props.name, props.markerID)
