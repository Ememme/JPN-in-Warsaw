# Japanese restaurants in Warsaw


This is my final project accomplished during Google Front-End Development Nanodegree Program at Udacity. It is a simple application that fetches information about over 60 Japanese restaurants in Warsaw. One can filter them by district and get additional info, like location and average rating.

## Table of Contents

* [Project Overview](#project-overview)
* [Running the Application](#running--the-application)
* [Acknowledgements](#acknowledgments)
* [License](#license)

## Project Overview

Project made with React and bootstraped from [`create-react-app`](https://github.com/facebook/create-react-app).

#### React Components Structure
```
<App /
  <Loading />
  <Error />

  <Header />

    <Sidebar />

    <Map />
      <GoogleMapReact />
      <Marker />
      <InfoWindow />
  <Footer />
```



## Running the Application

The project needs to be installed on your local machine.
Download or clone the repository `git clone https://github.com/Ememme/JPN-in-Warsaw.git`
and do the following:

* `cd` to _jpn-in-warsaw_ folder
* in your terminal run `npm install` to install all the project dependencies
* start the development server with `npm start`
* usually the site opens automatically, if not please visit http://localhost:3000

The service worker is implemented ONLY during production build.



#### Dependencies & 3rd party libraries or API

* Google Map React - [`google-map-react`](https://www.npmjs.com/package/google-map-react)
* Restaurant data from [Zomato ](https://developers.zomato.com/api)


### Acknowledgements

1. All icons come from [Flaticon](https://www.flaticon.com/)
2. CSS spinner used in Loading component from [Tobias Ahlin](https://github.com/tobiasahlin/SpinKit/blob/master/css/spinners/2-double-bounce.css)
3. Hamburger menu and its animation from [Jon Suh](https://github.com/jonsuh/hamburgers/blob/master/dist/hamburgers.css)
4. Styles for map [SnazzyMaps](https://snazzymaps.com/style/12940/momentum )

### License
The content of this repository is free and is licensed under a MIT Licence. 
