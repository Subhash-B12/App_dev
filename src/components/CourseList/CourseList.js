import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './CourseList.css';

const courses = [
  {
    title: "Web design & development courses for beginners",
    instructor: "John Doe",
    rating: "4.5",
    reviews: "250",
  },
  {
    title: "Advanced Web Design & Development",
    instructor: "Jane Smith",
    rating: "4.7",
    reviews: "180",
  },
  {
    title: "Full Stack Web Development",
    instructor: "Alice Johnson",
    rating: "4.8",
    reviews: "300",
  },
];

const CourseList = () => {
  const navigate = useNavigate(); 
  const location = useLocation(); // Access location for passing state
  const successMessage = location.state?.successMessage; // Retrieve success message from state

  const handleEnrollClick = () => {
    navigate('/enroll'); 
  };

  return (
    <div className="course-list-container">
      {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message if available */}
      <h2 className="section-title">OUR COURSES</h2>
      <h3 className="course-list-title">Checkout Our Courses</h3>
      <div className="courses">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-info">
              <h4 className="course-title">{course.title}</h4>
              <div className="course-meta">
                <span className="instructor"><i className="fa fa-user"></i> {course.instructor}</span>
                <span className="rating"><i className="fa fa-star"></i> {course.rating} ({course.reviews})</span>
              </div>
            </div>
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
          </div>
        ))}
      </div>
      <Link to="/" className="back-to-home-button">Back to Home</Link>
    </div>
  );
};

export default CourseList;
