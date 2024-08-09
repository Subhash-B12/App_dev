// src/components/HomeworkActivity/HomeworkActivity.js
import React from 'react';
import './HomeworkActivity.css';

const HomeworkActivity = () => {
  // Sample data for homework activity
  const homeworkActivities = [
    { subject: 'Math', assignment: 'Chapter 5 Exercise', dueDate: '2024-07-31' },
    { subject: 'Science', assignment: 'Lab Report', dueDate: '2024-08-01' },
    { subject: 'History', assignment: 'Essay on World War II', dueDate: '2024-08-05' },
  ];

  return (
    <div className="homework-activity">
      <h3>Homework Activity</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Assignment</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {homeworkActivities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.subject}</td>
              <td>{activity.assignment}</td>
              <td>{activity.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeworkActivity;
