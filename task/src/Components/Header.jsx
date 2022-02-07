import React from 'react';
import './header.css';
import {FaStar, FaSwimmer} from 'react-icons/fa'


function Header() {
  return <div className="header">
      
      <div className="icons">
      <FaStar/>
      <p>Featued</p>
      </div>

      <div className="icons">
      <FaSwimmer/>
      <p>Aquatics</p>
      </div>

  </div>
}

export default Header;

