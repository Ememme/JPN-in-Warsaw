import React from 'react'
import '../App.css'
import Logo from '../Assets/kanji-symbol-of-japan.svg'

const Header = () => {
  return (
    <header className="app-header">
      <div className="button-wrapper">
        <button id="menu" className="hamburger" type="button">
          <span className="hamburger-box hamburger--spring">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="app-logo"><img src={Logo} alt="Kanji symbol of Japan" style={{width: '80px', height: '80px' }}/></div>
      <h1 className="app-title">Japanese Restaurants in Warsaw</h1>
    </header>
  )
}

export default Header
