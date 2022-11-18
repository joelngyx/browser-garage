import React, { useState } from "react";
import Logo from "../../assets/logo.svg"

const Header = () => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleIsShowingText = () => {
    isShowing === false ? setIsShowing(true) : setIsShowing(false);
  }

  return (
    <div className="mt-2">
      <div className="d-flex justify-content-start p-0 col-12 col-m-6">
        <div class='page-header'><h1>BrowserGarage<img src={Logo} alt='browsergaragelogo'></img></h1></div>
      </div>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-3">
        <button class='guide-button' onClick={toggleIsShowingText}>
          {(isShowing === true) ? 
          <p>hide</p> : <p>how to use BrowserGarage</p>}</button>
      </div>
      {(isShowing === false) ? 
      <></> : 
      <>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-0">
        <p>use this web application to turn your laptop's keyboard or mobile phone into a musical instrument!</p>
      </div>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-0">
        <p>to play sounds, you could either:</p>
      </div>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-0">
        <p>- map a sound to a key, and hold down the key to play the sound</p>
      </div>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-0">
        <p>- hold down a sound button with your mouse or finger to play the sound</p>
      </div>
      <div className="d-flex justify-content-start p-0 col-12 col-m-6 my-0">
        <p>to record sounds, simply click on a 'record' button</p>
      </div>
      </>
      }
      </div>
  )
}

export default Header;