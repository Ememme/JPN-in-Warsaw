import React from 'react'
import Ninja from '../Assets/ninja.svg'

const Error = () => {
  return (
      <div className='error'>
        <div className='error-message'>
          <img src={Ninja} alt="ninja" style={{width: '200px', height: '200px' }}></img>
          <p>It seems that there is a network problem.</p>
          <p>Check your connection or try reloading the app</p>
        </div>
      </div>
    )
}

export default Error
