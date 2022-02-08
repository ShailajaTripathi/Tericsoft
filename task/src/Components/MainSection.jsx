import React from "react";
import './Mainsection.css'
import Time from './Time'

function MainSection() {
  return (
    <div>
      <div className="container">
        <h3>Highlights</h3>
        <div className="card-section">
          <div className="card-row">
            <div className="card-box">
            <img
              src="https://via.placeholder.com/250x300/F0F0FF/800000 ?Text=Tericsoft.comC/O https://placeholder.com/"
              alt="day-1"
            />
            </div>
            <div className="card-details">

            <div className="card-row">
              <p>Day-1 of BMX</p> 
              <Time/>
</div>
<div className="card-row">
<button className="btn">HEATS</button>
<button className="btn">HIGHLIGHTS</button>
</div>
            </div>
          </div>
          <div className="card-row">
            <div className="card-box">
            <img
              src="https://via.placeholder.com/250x300/FFF0FF/808008 ?Text=Tericsoft.comC/O https://placeholder.com/"
              alt="day-2"
            />
            </div>
               <div className="card-details">
               <h6>Day-2 of BMX</h6>
               <Time/>
<div className="card-row">
<button className="btn">HEATS</button>
<button className="btn">MIXED</button>
</div>
</div>
          </div>
          <div className="card-row">
            <div className="card-box">
            <img
              src="https://via.placeholder.com/250x300/FFF0FFF/800080 ?Text=Tericsoft.com

C/O https://placeholder.com/"
              alt="day-3"
            />
            </div>
               <div className="card-details">
               <h6>Day-1 of BMX</h6>
               <Time/>
<div className="card-row">
<button className="btn">SEMI'S</button>
<button className="btn">HEATS</button>
</div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
