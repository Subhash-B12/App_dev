// src/components/AbsenteeList/AbsenteeList.js
import React from 'react';
import './AbsenteeList.css';

const AbsenteeList = () => {
  // Sample data for absentee list
  const absentees = [
    { name: 'John Doe', reason: 'Sick', date: '2024-07-29' },
    { name: 'Jane Smith', reason: 'Vacation', date: '2024-07-30' },
    { name: 'Sam Wilson', reason: 'Personal', date: '2024-07-31' },
  ];

  return (
    <div className="absentee-list">
      <h3>Absentee List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reason</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {absentees.map((absentee, index) => (
            <tr key={index}>
              <td>{absentee.name}</td>
              <td>{absentee.reason}</td>
              <td>{absentee.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbsenteeList;
