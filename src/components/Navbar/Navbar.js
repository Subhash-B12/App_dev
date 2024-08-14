import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ hideAuthButtons }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src="https://assets.softr-files.com/applications/46b2f7f3-049f-4308-9a66-61e6472b87ab/assets/57723b6b-77df-40f3-b2ce-af8d5a40d680.svg"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/courses">Courses</Link></li> {/* Updated Link to CourseList */}
        <li><Link to="/professors">Professors</Link></li>
        <li><Link to="/student-directory">Student Directory</Link></li>
      </ul>
      {!hideAuthButtons && (
        <div className="auth-buttons">
          <Link to="/login" className="sign-in-btn">Sign In</Link>
          <Link to="/signup" className="sign-up-btn">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
