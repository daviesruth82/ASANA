import React from 'react'
import './Styles/Gov.css'

const Gov = () => {
  return (
    <div className="Gov">
      <div className="Gov-container">
        <div className='Gov-img'>
          <img
            src="https://assets.asana.biz/transform/9d71c62a-0d94-48e1-a980-68a38f671b00/web-uses-governmentindustry-asanagovdesktop-en-US?io=transform:fill,width:1120&format=webp"
            alt=""
          />
        </div>
        <div className='Gov-text'>
          <h3>Stay secure and compliant with Asana Gov</h3>
          <p>
            Asana Gov empowers government agencies to coordinate critical
            work—from strategic planning to rapid response—on a platform that’s
            easy to implement, scales seamlessly, and meets your compliance
            needs.
          </p>
        </div>
        <div className='Gov-btn'>
           <button>Check out Asana Gov</button> 
        </div>
      </div>
    </div>
  );
}

export default Gov
