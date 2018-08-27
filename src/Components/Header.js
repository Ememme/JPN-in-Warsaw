import React, {Component} from 'react'
import '../App.css'
import Logo from '../Assets/kanji-symbol-of-japan.svg'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // 'is-active' class is used to toggle hamburger menu with CSS
      addActiveClass: false,
      // ariaExpanded to indicate to visually impaired users whether the menu is opened or closed.
      ariaExpanded: true,
      // flag for sidebar
      menuOpen: false
    }
  }
  // Function based on this example: https://codepen.io/JorgeGWD/pen/jYMVXY
  toggleActive() {
    this.props.toggleMenu();
    this.setState({
      addActiveClass: !this.state.addActiveClass,
      ariaExpanded: !this.state.ariaExpanded,
      menuOpen: !this.state.menuOpen
    });
    const menuButton = document.getElementById("menu");
    menuButton.setAttribute('aria-expanded', this.state.ariaExpanded);

  }
  render() {

    let menuClasses = ["hamburger", "hamburger--spring"];
    if (this.state.addActiveClass) {
      menuClasses.push("is-active");
    }
    return (

      <header className="app-header">
        <div className="button-wrapper">
          <button id="menu" className={menuClasses.join(' ')} type="button" aria-label="Menu" aria-controls="navigation" onClick={this.toggleActive.bind(this)}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="app-logo"><img src={Logo} alt="Kanji symbol of Japan" style={{width: '80px', height: '80px' }}/></div>
        <h1 className="app-title">Japanese Restaurants in Warsaw</h1>
      </header>
    )

  }
}

export default Header
