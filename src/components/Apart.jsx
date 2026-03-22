import React from "react";
import "./Styles/Apart.css";

const Apart = () => {
  return (
    <div className="apart">
      <div className="apart-con">
        <div className="headtext">
          <h2>What sets Asana apart</h2>
        </div>
        <div className="apart-holder">
          <div className="apart-right">
            <div className="inner-right">
              <h3>Amplify your impact with AI</h3>
              <p>
                Let Asana AI handle work for you—with the full context of your
                business—so your teams can achieve their goals faster.
              </p>
              <button className="meet-btn">Meet AI Teamates</button>
            </div>
            <div className="inner-left">
              <img
                src="https://assets.asana.biz/transform/9c192ab3-d6e7-483b-abed-b2e08ba2e6c0/homepage_ai_update?io=transform:fill,width:2560&format=webp"
                alt=""
              />
            </div>
          </div>
          <div className="apart-left">
            <div className="inner-right">
              <h3>More clarity and accountability</h3>
              <p>
                Connect strategic goals to the teams that help achieve them.
                Keep your company on track with AI working alongside your teams.
              </p>
              <button className="meet-btn">Learn about goals</button>
            </div>
            <div className="inner-left">
              <img
                src="https://assets.asana.biz/transform/84bd82a5-8756-4b9b-a760-e790c5cbbc5b/WEB-homepage-goals-en_us?io=transform:fill,width:2560&format=webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apart;
