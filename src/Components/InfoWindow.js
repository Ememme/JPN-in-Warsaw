import React from 'react'

const InfoWindow = props => {
    return (
      <div className='infoWindow'>
        {props.restaurant.map(place =>
        <div className='details'>
          <h2>{place.restaurant.name}</h2>
          <p id='info-win-address'>Address: {place.restaurant.location.address}</p>
          <p id='info-win-rating'>Rating: {place.restaurant.user_rating.aggregate_rating}</p>
          <button className='zomato-link'><a href={place.restaurant.events_url}>Get details on Zomato</a></button>
        </div>
      )}
      </div>
    )
  }

  export default InfoWindow;
