import React, {Component} from 'react';
import Icon from '../Assets/marker_black.svg'

const Marker = props => {

	// animateOnClick() {
	//
	// }

  return (

		<div className="marker" onClick={() => console.log(props.name, props.district, props.address)} >
    	<img src={Icon} alt="marker"/>
  	</div>
	)
}

export default Marker;
