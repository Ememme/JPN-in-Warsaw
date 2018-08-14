import React, {Component} from 'react';
import Icon from '../Assets/marker_black.svg'

const Marker = props => {

  return (
		<div className="marker" onClick={() => console.log(props.name, props.district)}>
    	<img src={Icon} alt="marker"/>
  	</div>
	)
}

export default Marker;
