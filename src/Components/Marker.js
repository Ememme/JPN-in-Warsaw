import React, { Component } from 'react';
import Icon from '../Assets/marker_black.png';

const Marker = props => {
  return (<div className="marker">
          <img  src={Icon} style={{width: '20px', height: '20px'}} alt="marker"/>
        </div>)
}

export default Marker;

// style={{width: '10px', height: '10px', backgroundColor: 'red'}}
