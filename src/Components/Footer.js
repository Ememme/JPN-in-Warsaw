import React from 'react'
import Zomato from '../Assets/zomato-logo.svg'

const Footer = () => {
  return (
      <div className='footer'>
        <div className='footer-left'>
          <p id="author">Designed by <a href="https://www.linkedin.com/in/magdamieczynska/" aria-label="See linkedin Profile"><em>MagdaM</em></a></p>
        </div>
        <div className='footer-credits'>
           <p> Data by <img src={Zomato} alt="Zomato logo"/>
           All icons from <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a></p>
        </div>
      </div>
    )
}

export default Footer
