import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Middle.css';

const Middle = () => {
  const navigate = useNavigate();

  const handleEnquiryClick = () => {
    navigate('/enquiry');
  };

  return (
    <div className="middle-container">
      <div className="text-container">
        <div className="title">
          <h2>Welcome to</h2>
          <h2>NoCode</h2>
          <h2>University's</h2>
          <h2>Student Portal</h2>
        </div>
        <p className="right">
          As a teacher, you can peruse courses and the student directory,
          as well as add new courses and update student profiles.
        </p>
        <div className="button-container">
          <button className="view-course-btn" onClick={handleEnquiryClick}>Enquiry Form</button>
        </div>
      </div>
      <div className="image-container">
        <img src="https://assets.softr-files.com/applications/46b2f7f3-049f-4308-9a66-61e6472b87ab/assets/4708ee58-c2fc-4e29-8b5d-18b8b7679a6c.svg" alt="Welcome" className="welcome-image" />
      </div>
    </div>
  );
}

export default Middle;
  