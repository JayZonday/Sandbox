import React, { Component } from 'react';
import { Link, Navlink } from "react-router-dom";
import './index.css';


class Navbar extends Component{
  render(){
    return (
        <div className='navbar'>
          <Link to='/'><button className='nav-btn'>HOME</button></Link>
          <Link to='/posts'><button className='nav-btn'>POSTS</button></Link>
          <Link to='/add-post'><button className='nav-btn'>MAKE A POST</button></Link>
          <button className='nav-btn'>HISTORY</button>
          <button className='nav-btn'>CONTACT</button>
        </div>

    );
  }
}

export default Navbar;
