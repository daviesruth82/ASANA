import React from 'react'
import "./Styles/Platform.css"

const Platform = () => {
  return (
    <div className="Platform-con">
      <div className="platform-holder">
        <h1>
          The platform for human +<br /> AI collaboration
        </h1>
        <div className="comp-hold">
          <div className="btn-cons">
            <button className="btn1">Marketing</button>
            <button className="btn2">Operations</button>
            <button className="btn3">IT</button>
            <button className="btn4">Leadership</button>
          </div>
          <div className="hero-hold">
            <div className="right-con">
              <img
                src="https://assets.asana.biz/transform/a06e7cef-41f6-4474-b06e-ae0e43501edb/homepage_ai_update?io=transform:fill"
                alt=""
              />
            </div>
            <div className="left-con">
              <div>
                <h3>Maximize campaign ROI</h3>
              </div>

              <ul className="list">
                <li>Streamline campaign management</li>
                <li>Enhance creative production</li>
                <li>Manage events and editorial calendars</li>
              </ul>
              <div>
                <button className='getbtn' >Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform
