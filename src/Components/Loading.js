import React from 'react';

const Loading = () =>  {


    return (
    <div className="loader">
      <p>Loading data from ZOMATO</p>
      <div className="sk-double-bounce">
        <div className="sk-child sk-double-bounce1"></div>
        <div className="sk-child sk-double-bounce2"></div>
      </div>
    </div>
    )
}

export default Loading;
