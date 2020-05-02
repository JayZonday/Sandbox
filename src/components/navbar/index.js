import React, { Component } from 'react';
import './index.css';


class Navbar extends Component{
  render(){
    return (
        <div className='navbar'>
          <button className='nav-btn'>HOME</button> 
          <button className='nav-btn'>ARTICLES</button>
          <button className='nav-btn'>MAKE A POST</button>
          <button className='nav-btn'>HISTORY</button>
          <button className='nav-btn'>CONTACT</button>
        </div>

    );
  }
}

export default Navbar;
