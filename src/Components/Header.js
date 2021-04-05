import React from 'react';
import logo from '../assets/images/logotype_2x.webp'

const Header = (props) => {

  return (
    <div className='header-container'>
        <div className="header-brand">
            <img src={logo} alt="" style={{height: 20}}/>
        </div>
        <div className='navbar-container'>
            <ul className='navbar-list'>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>Home</li>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>Solution</li>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>About</li>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>Experts</li>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>Blog</li>
                <li style={{fontWeight:'bold', fontSize: 18}} className='list-item'>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default Header;