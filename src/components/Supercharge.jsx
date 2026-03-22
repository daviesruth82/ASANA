import React from 'react'
import './Styles/supercharge.css'

const Supercharge = () => {
  return (
    <div className="super-container">
      <div className="super-holder">
        <div className="upper">
          <h1>
            Supercharge your teams <br /> with AI that gets work done
          </h1>
          <p>
            Give your teams AI that understands their work, keeps projects
            moving,
            <br /> and gets better the more your teams use it.
          </p>

          <div className="btn-holder">
            <button className="start-btn"> Get started</button>
            <button className="sales-btn">Contact sales</button>
          </div>
        </div>
        <div className="lower">
          <img
            src="https://embed-ssl.wistia.com/deliveries/5db8175a0d68c14dcbed7b9fcc50dbac.jpg"
            alt="deliveries"
          />
        </div>
        <footer>
          <div>
            <h3>85% of Fortune 100 <br />companies choose Asana¹</h3>
          </div>
          <div className="image-holder">
            <img className='amazon'
              src="https://assets.asana.biz/transform/94a2af9e-55e7-489b-bcd9-7f2836f5e45f/amazon?io=transform:fill,width:768&format=webp"
              alt=""
            />
            <img
              src="https://assets.asana.biz/transform/7aa89522-d837-49fc-ae5b-d8701de258fd/accenture?io=transform:fill"
              alt=""
            />
            <img
              src="https://assets.asana.biz/transform/64c6de51-290f-40fa-808a-241c6bae8528/JJ?io=transform:fill"
              alt=""
            />
            <img
              src="https://assets.asana.biz/transform/29c5cd4b-7a60-4557-8004-f78cbb8c5ffc/dell?io=transform:fill"
              alt=""
            />
            <img
              src="https://assets.asana.biz/transform/8d9b2024-7c0b-463b-88c0-ee3107d4f5fe/merck?io=transform:fill"
              alt=""
            />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Supercharge
