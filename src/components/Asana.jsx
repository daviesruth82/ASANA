import React from 'react'
import Nav from "./Nav"
import Supercharge from "./Supercharge"
import './Styles/Asana.css'
import Platform from './Platform'
import SeeChild from './SeeChild'
import Apart from './Apart'
import Gov from './Gov'
import Connect from './Connect'
import Companies from "./Companies"
import Getstarted from './Getstarted'
import Moreinfo from './Moreinfo'

const Asana = () => {
  return (
    <div className="asana-container">
      <Nav />
      <Supercharge />
      <Platform />
      <SeeChild />
      <Apart />
      <Gov />
      <Connect />
      <Companies />
      <Getstarted />
      <Moreinfo />
    </div>
  );
}

export default Asana
