import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TableRow from '../TableRow/TableRow';
import SearchBar from '../SearchBar/SearchBar';
import './StudentDirectory.css';

const StudentDirectory = () => {
  const [studentList, setStudentList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then(response => response.json())
      .then(data => setStudentList(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, []); // Fetch data on component mount

  const handlePrint = () => {
    window.print();
  };

  const handleAddNew = () => {
    const newStudent = {
      name: 'New Student',
      parents: 'New Parent 1, New Parent 2',
      address: 'New Address',
      teacher: 'New Teacher',
      grade: 'New Grade',
      email: 'newemail@example.com',
      phone: '1234567890',
      course: 'New Course',
    };
    fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(response => response.json())
      .then(data => setStudentList([...studentList, data]))
      .catch(error => console.error('Error adding new student:', error));
  };

  const handleGroupBy = () => {
    const groupedStudents = [...studentList].sort((a, b) => a.grade.localeCompare(b.grade));
    setStudentList(groupedStudents);
  };

  const handleSorting = () => {
    const sortedStudents = [...studentList].sort((a, b) => a.name.localeCompare(b.name));
    setStudentList(sortedStudents);
  };

  const handleColumns = () => {
    alert('Toggle columns functionality not implemented yet');
  };

  const handleSearch = (query) => {
    fetch(`http://localhost:5000/students?name_like=${query}`)
      .then(response => response.json())
      .then(data => setStudentList(data))
      .catch(error => console.error('Error searching students:', error));
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="student-directory">
      <h2>NO CODE UNIVERSITY</h2>
      <h3>Student Directory</h3>
      <div className="search-and-buttons">
        <SearchBar onSearch={handleSearch} /> {/* Pass the search function as a prop */}
        <div className="button-group">
          <button className="btn" onClick={handlePrint}>Display/Print</button>
          <button className="btn" onClick={handleAddNew}>Add New</button>
          <button className="btn" onClick={handleGroupBy}>Group By</button>
          <button className="btn" onClick={handleSorting}>Sorting</button>
          <button className="btn" onClick={handleColumns}>Columns</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Parents Names</th>
            <th>Address</th>
            <th>Teacher</th>
            <th>Grade</th>
            <th>Course</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, index) => (
            <TableRow key={index} student={student} />
          ))}
        </tbody>
      </table>
      <button className="btn back-to-home" onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default StudentDirectory;
