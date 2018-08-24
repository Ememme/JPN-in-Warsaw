import React, {Component} from 'react';
import Icon from '../Assets/marker_black.svg'

const Marker = props => {


  const { openInfoWindow, allRestaurants } = props


  return (

		<div className="marker" onClick={() => openInfoWindow(props.markerID)} >
    	<img src={Icon} alt="marker"  tabIndex="0"/>
  	</div>
	)
}

export default Marker;
// logging marker () => console.log(props.name, props.markerID)
