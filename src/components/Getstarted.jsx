import React from 'react'
import './Styles/Getstarted.css'
import arrow from "../assets/arrow.svg"

const Getstarted = () => {
  return (
    <div className="get-container">
      <div className="get-holder">
        <div className="get-upper">
          <div className="get-right">
            <h3>Get started easily</h3>
            <p>
              Tour the platform, read a few deep dives, or kickstart your <br />{" "}
              work management journey with the right template.
            </p>
          </div>
          <div className="get-left">
            <div className="get-card">
              <p>Try the Asana demo</p>
              <div className="get-comp">
                <p>See Asana in action</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="get-card">
              <p>Discover Resources</p>
              <div className="get-comp">
                <p>Help articles and tutorials</p> <img src={arrow} alt="" />
              </div>
            </div>
            <div className="get-card">
              <p>Start with a template</p>
              <div className="get-comp">
                <p>Get started faster with a template</p>{" "}
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="get-lower">
        <div className="lower-containers">
          <img
            src="https://assets.asana.biz/transform/8d1a1cac-7296-49b4-b09a-f0e032bf7ae9/2025-Forrester-CWM-Card-Image?io=transform:fill"
            alt=""
          />
          <p>
            A Leader in The Forrester Wave: Collaborative Work Management Tools
            2025 Report
          </p>
          <div className="lower-link">
            <p>Get the Report</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="lower-containers">
          <img
            src="https://assets.asana.biz/transform/ace1daba-48cc-4d84-8f77-b14f65bd9cff/thumbnail_gartnerlogoupdate_static?io=transform:fill"
            alt=""
          />
          <p>
            A Leader in the 2025 Gartner Magic Quadrant for Collaborative Work
            Management three years in a row
          </p>
          <div className="lower-link">
            <p>Learn more</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="lower-containers">
          <img
            src="https://assets.asana.biz/transform/3fe8cd2a-6a9a-4c71-96d7-acd70b2682d0/compare-monday-fy26-experts-g2?io=transform:fill,width:2560&format=webp"
            alt=""
          />
          <p>
            A leader in Work Management and OKR Software with more than 12,000
            user reviews
          </p>
          <div className="lower-link">
            <p>Read user reviews</p>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted

