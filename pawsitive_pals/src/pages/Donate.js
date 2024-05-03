import React from "react";
import "./donate.css";
import { Link } from 'react-router-dom';

const Donate = () => {
  return (
    <>
    <div className="donateheader"></div>
    <div className="donateHeading">
      DONATE FOR A PET
    </div>
    <div className="donateBody">
      <div className="rupees">
          <div className="Rs200">
            Rs. 200
          </div>
          <button className="donateBtn">Donate</button>
      </div>
      <div className="rupees">
          <div className="Rs500">
            Rs. 500
          </div>
          <button className="donateBtn">Donate</button>
      </div>
      <div className="rupees">
          <div className="Rs1000">
            Rs. 1000
          </div>
          <button className="donateBtn">Donate</button>
      </div>
    </div>
    <div className="returnToHome">
        <Link to="/" id="homeBtn">Home</Link>
    </div>
    <div className="donatefooter"></div>
    
    </>
  );
};

export default Donate;