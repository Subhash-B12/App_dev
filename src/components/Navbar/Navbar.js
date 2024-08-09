// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = () => {
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleCoursesToggle = () => {
    setCoursesOpen(!isCoursesOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="https://assets.softr-files.com/applications/46b2f7f3-049f-4308-9a66-61e6472b87ab/assets/57723b6b-77df-40f3-b2ce-af8d5a40d680.svg"
          alt="Logo"
          className="logo-image"
        />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li className="dropdown">
          <a href="#courses" onClick={(e) => { e.preventDefault(); handleCoursesToggle(); }}>
            Courses
          </a>
          {isCoursesOpen && (
            <ul className="dropdown-menu">
              <li><a href="#course-list">Course List</a></li>
              <li><a href="#course-calendar">Course Calendar</a></li>
            </ul>
          )}
        </li>
        <li><a href="#professors">Professors</a></li>
        <li><a href="#students">Student Directory</a></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/login" className="sign-in-btn">Sign In</Link>
        <Link to="/signup" className="sign-up-btn">Sign Up</Link>
      </div>
      <div className="profile-icon">
        <IconButton color='inherit' onClick={handleProfileMenuOpen}>
          <AccountCircleIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleProfileMenuClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          <MenuItem onClick={handleProfileMenuClose}>
            <Link to="/profile">
              <BookIcon className="menu-icon" />
              <span className="menu-text">My Profile</span>
            </Link>
          </MenuItem>
          <MenuItem onClick={() => {
            handleSignOut();
            handleProfileMenuClose();
          }}>
            <ExitToAppIcon className="menu-icon" />
            <span className="menu-text">Sign Out</span>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
