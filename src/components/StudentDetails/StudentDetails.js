import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StudentDetails.css';

const StudentDetails = () => {
  const { rollNumber } = useParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5001/students?rollNumber=${rollNumber}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.length === 0) {
          throw new Error('Student not found');
        }
        setStudent(data[0]);
      } catch (error) {
        console.error('Error fetching student details:', error);
        setError('Failed to load student details. Please try again later.');
      }
    };

    fetchStudentDetails();
  }, [rollNumber]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!student) {
    return <div className="loading-message">Loading student details...</div>;
  }

  return (
    <div className="student-details-container">
      <h1>Student Details</h1>
      <div className="student-info">
        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>CGPA:</strong> {student.cgpa}</p>
        <p><strong>Attendance Percentage:</strong> {student.attendancePercentage}%</p>
        <p><strong>Fees Paid:</strong> ${student.feesPaid}</p>
        <p><strong>Total Fees:</strong> ${student.totalFees}</p>
      </div>
      <div className="student-table-container">
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {student.subjects && student.subjects.map(subject => (
              <tr key={subject.name}>
                <td>{subject.name}</td>
                <td>{subject.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
