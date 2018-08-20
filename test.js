getData() {
    fetch('https://developers.zomato.com/api/v2.1/search?entity_type=zone&start=0&count=15&lat=50.06465&lon=19.94498&radius=500&collection_id=30&sort=real_distance&order=desc', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'user-key': '12444e5c0a0d7a10f6a562d71713c733'
    }})
  .then((response) => {
    return response.json();
  }).then(returnedPlaces => {
    const filteredPlaces = returnedPlaces.restaurants
    const places = returnedPlaces.restaurants
    this.setState({
      places, filteredPlaces
    })
  }).catch((error) => {
    console.log(`Places didn't load due to error: ${error}`);
    this.setState({
      isError: true
    })
  })
}
