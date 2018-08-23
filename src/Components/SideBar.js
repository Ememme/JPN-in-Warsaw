import React, { Component} from 'react'

class SideBar extends Component {
  
  render() {
    return (

      <div className='sidebar'>
        <div className='sidebar-heading'><h2>List of restaurants</h2></div>
        <div className="district-selection">
          <select value={this.props.district} aria-label="Find by district" >
          <option value="blank" disabled>Find a restaurant in your area</option>
          <option value="All">All</option>
          <option value="Śródmieście Północne">Śródmieście Północne</option>
          <option value="Śródmieście Północne">Śródmieście Południowe</option>
          <option value="Powiśle">Powiśle</option>
          <option value="Wola">Wola</option>
          </select>
      </div>
        {/* <ul className="restaurant-in-district" id="district-list">

        </ul> */}
      </div>
    )
  }

}
export default SideBar;
// onChange={event => props.filterPlaces(event.target.value)}
