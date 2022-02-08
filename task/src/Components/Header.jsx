import React from 'react';
import './header.css';
import {FaStar, FaSwimmer} from 'react-icons/fa'


function Header() {
  return <div>
   <div className="header">

      <div className="icons">
      <FaStar/>
      <p>Featured</p>
      </div>

      <div className="icons">
      <FaSwimmer/>
      <p>Armoury</p>
      </div>

      <div className="icons">
      <FaSwimmer/>
      <p>Aquatics</p>
      </div>

      <div className="icons">
      <FaSwimmer/>
      <p>Cycling</p>
      </div>

      <div className="icons">
      <FaStar/>
      <p>Equestrian</p>
      </div>

      <div className="icons">
      <FaSwimmer/>
      <p>Extreme</p>
      </div>

      <div className="icons">
      <FaStar/>
      <p>Golf</p>
      </div>

 <div className="icons">
      <FaSwimmer/>
      <p>Gymnastics</p>
      </div>
      
      <div className="icons">
      <FaStar/>
      <p>Lake and sea</p>
      </div>
     
  </div>
  <div className='header-line'></div>

  </div> 
}

export default Header;

