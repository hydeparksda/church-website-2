import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css'
import ourLogo from '../../Logos/HydeParkLogo-01.png'

const MainNav = () => (
  <div className="main_nav">
    <nav className="navigation">
      <ul>
      
        <li><Link className="list_link" to={'/'}>Home</Link></li>
        <li><Link className="list_link" to={'/newhere'}>New Here?</Link></li>
        <li><Link className="list_link" to={'/aboutus'}>About Us</Link></li>
        <li className="logo_container"><Link to={'/'}><img className="imglogo" src={ourLogo}/></Link></li>
        <li><Link className="list_link" to={'/sermons'}>Sermons</Link></li>
        <li><Link className="list_link" to={'/events'}>Events</Link></li>
        <li><Link className="list_link" to={'/give'}>Give</Link></li>
      </ul>
    </nav>
  </div>
)

export default MainNav;