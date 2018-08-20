import React from 'react'

const InfoWindow = (props) => {
    return (
      <div className='infoWindow'>
        <div className='details'>
          <h2>{props.name}</h2>
          <p id='info-win-address'>Address: {props.address}</p>
          <p id='info-win-rating'>Rating: {props.rating}</p>
          {/* <img src={props.photo} alt="rest" height="50" width="100" height="100"></img> */}
        </div>
      </div>
    )
  }

  export default InfoWindow;
