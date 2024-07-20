import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { FaUserCircle } from 'react-icons/fa';

import { FaBook } from "react-icons/fa6";

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [profileOpen, setProfileOpen] = useState(false);
  const [libraryOpen, setLibraryOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleProfileMenu = () => {
    setProfileOpen(!profileOpen);
  };

  const toggleLibraryMenu = () => {
    setLibraryOpen(!libraryOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img className='logo-image' src='https://res.cloudinary.com/dnhmnvbpl/image/upload/v1721445424/rammandirlogo_htm3nr.jpg' alt="Logo" />
          <Link to="/">Sri Mandir</Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bookpooja">Puja</Link></li>
            <li><Link to="/panchange">Panchang</Link></li>
            <li><Link to="/temples">Temples</Link></li>
          </ul>
        </nav>
        <div className="custom-select-box" onClick={toggleLibraryMenu}>
                Library <span className="arrow">&#9662;</span>
                {libraryOpen && (
                  <ul className="custom-select-options">
                    <li>
                      <Link to="/library/book1">
                        <FaBook className='icon'/>
                        <div className='article-conent-container'>
                          <h3>Sanathan Sathiya</h3>
                          <p>read all articles</p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link to="/library/book1">
                        <FaBook className='icon'/>
                        <div className='article-conent-container'>
                          <h3>Chalisa</h3>
                          <p>Seek Devins Grace with Chalisa</p>
                        </div>
                      </Link>
                    </li>

                    <li>
                      <Link to="/library/book1">
                        <FaBook className='icon'/>
                        <div className='article-conent-container'>
                          <h3>Arti</h3>
                          <p>Commence your pooja with arties</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                )}
        </div>
        <div className="header-elements">
          <select className="language-dropdown" value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <div className="profile-icon-container" onClick={toggleProfileMenu}>
            <FaUserCircle className="profile-icon" title="Profile icon" />
            {profileOpen && (
              <div className="profile-menu">
                <ul>
                  <li><Link to="/myprofile">My Profile</Link></li>
                  <li><Link to="/mypoojabookings">My Pooja Bookings</Link></li>
                  <li><Link to="/logout">Logout</Link></li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
