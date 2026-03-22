import React from 'react'
import "./Styles/Nav.css"

const Nav = () => {
  return (
    <div className="container">
      <div className="holder">
        <div className="right ">
          <div className="logo">
            <img
              src="https://asana.com/assets/img/brand/asana-logo-favicon.ico"
              alt="icon"
            />{" "}
            <h2>asana</h2>
          </div>

          <ul className="nav-list">
            <li>Product</li>
            <li>Solution</li>
            <li>Learning & support</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="left">
          <div>
            <img
              src="https://assets.asana.biz/transform/3ac30492-304b-4644-a39b-e89fad0df303/SD040-web-nav-GlobeIcon-en-US"
              alt="globe"
            />
          </div>
          <ul className="nav-list">
            <li>Contact Sales</li>
            <li>Login</li>
          </ul>
          <button className="nav-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Nav
