import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollmentForm.css';

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentsNames: '',
    address: '',
    teacher: '',
    grade: '',
    course: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Form submitted:', data);
        setIsSubmitted(true); // Set submission state to true
        navigate('/courses', { state: { successMessage: 'Enrolled successfully!' } }); // Redirect to CourseList with success message
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        setErrors({ ...errors, form: 'An error occurred while submitting the form.' });
      });
  };

  return (
    <div className="enrollment-form-container">
      <h2 className="form-title">Enrollment Form</h2>
      {isSubmitted && <p className="success-message">Enrolled successfully!</p>} {/* Display success message */}
      <form onSubmit={handleSubmit} className="enrollment-form">
        {/* Form Fields */}
        {errors.form && <p className="error">{errors.form}</p>}
        <label htmlFor="studentName">Student Name</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />

        <label htmlFor="parentsNames">Parents Names</label>
        <input
          type="text"
          id="parentsNames"
          name="parentsNames"
          value={formData.parentsNames}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="teacher">Teacher</label>
        <input
          type="text"
          id="teacher"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          required
        />

        <label htmlFor="grade">Grade</label>
        <input
          type="text"
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          required
        />

        <label htmlFor="course">Course</label>
        <input
          type="text"
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" className="enroll-button">Enroll</button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
