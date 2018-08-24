import React, {Component} from 'react';
import Icon from '../Assets/marker_black.svg'

const Marker = props => {


  const { openWindow, allRestaurants } = props


  return (

		<div className="marker" onClick={() => openWindow(props.markerID)} >
    	<img src={Icon} alt="marker"  tabIndex="0"/>
  	</div>
	)
}

export default Marker;
// logging marker () => console.log(props.name, props.markerID)
