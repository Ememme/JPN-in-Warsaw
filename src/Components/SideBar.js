import React, { Component} from 'react'

class SideBar extends Component {

  handleOnChange(event) {
    this.props.filter(event.target.value)
  }

  render() {
    const { openInfoWindow } = this.props
    return (

      <div className='sidebar'
        onChange={this.handleOnChange.bind(this)}
        >
        <div className='sidebar-heading'><h2 className="restaurant-list">List of restaurants</h2></div>
        <div className="district-selection">
          <select value={this.props.districtRestaurants} aria-label="Dropdown menu: filter by district" >
          <option value="blank" disabled>Find a restaurant in your area</option>
          <option value="All">All</option>
          <option value="Śródmieście Północne">Śródmieście Północne</option>
          <option value="Śródmieście Południowe">Śródmieście Południowe</option>
          <option value="Powiśle">Powiśle</option>
          <option value="Wola">Wola</option>
          </select>
      </div>

        <ul className='district-restaurants' aria-label="List of restaurants" >
              {this.props.locations.map(item =>
              <li key={item.restaurant.R.res_id}
                onClick={() => openInfoWindow(item.restaurant.R.res_id)}
                className='location'
                aria-label={item.restaurant.name}
                role="button"
                tabIndex="0">
                <h3 className='location-name'>
                  {item.restaurant.name}
                </h3>

              </li>)}
        </ul>
      </div>
    )
  }

}
export default SideBar;
