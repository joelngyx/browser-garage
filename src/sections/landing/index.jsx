import React, { useEffect, useState } from "react";
import "./style.scss";
import Logo from "../../assets/logo2.svg";

const Landing = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  /* Testing */
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, [])



  return <div className="landing-section">
    <img className="logo-img" src={Logo} alt="Browser Garage Logo"/>
    <h1>Browser Garage</h1>
    <p>A simple, barebones Digital Audio Workstation on the browser</p>
    {(isLoaded) 
      ? <button onClick={props.handleSectionChange}>Begin</button> 
      : <p className="loading-text">Loading...</p>
    }
  </div>
}

export default Landing;