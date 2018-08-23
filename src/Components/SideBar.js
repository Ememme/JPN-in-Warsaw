import React, { Component} from 'react'

class SideBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      all: this.props.locations,
      Wola: [],
      SrodPd: [],
      SrodPn: [],
      Powisle: []
    }
  }

  handleOnChange(event) {
    console.log(event.target.value)
    this.props.filter(event.target.value)
  }

  render() {
    console.log('Locations', this.props.locations)
    return (

      <div className='sidebar'
        onChange={this.handleOnChange.bind(this)}
        >
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
