// src/components/AdminDashboard/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import AbsenteeList from '../AbsenteeList/AbsenteeList';
import HomeworkActivity from '../HomeworkActivity/HomeworkActivity';
import ActivityBarChart from '../ActivityBarChart/ActivityBarChart';
import { Button } from '@mui/material'; // Import Button component
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle back button click
  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Absentee List</h2>
          <AbsenteeList />
        </section>
        <section className="dashboard-section">
          <h2>Homework Activity</h2>
          <HomeworkActivity />
        </section>
        <section className="dashboard-section">
          <ActivityBarChart />
        </section>
      </main>
      <footer className="dashboard-footer">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
        >
          Back
        </Button>
      </footer>
    </div>
  );
};

export default AdminDashboard;
