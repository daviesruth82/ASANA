import React from "react";
import "./Styles/See.css";

const See = ({ data }) => {
  console.log(data);

  return (
   
        <div className="card-holder">
          <div className="card-wrap">
            <img className="images" src={data?.img} alt="img" />
            <h3>{data?.title}</h3>
            <p>{data?.description}</p>
            <div>
              <h4>{data?.foot}</h4>
            </div>
          </div>
        </div>
    
  );
};

export default See;
