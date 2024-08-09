// src/components/ActivityBarChart/ActivityBarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './ActivityBarChart.css';

const data = [
  { name: 'Jan', Homework: 4000, Absentee: 2400 },
  { name: 'Feb', Homework: 3000, Absentee: 1398 },
  { name: 'Mar', Homework: 2000, Absentee: 9800 },
  { name: 'Apr', Homework: 2780, Absentee: 3908 },
  { name: 'May', Homework: 1890, Absentee: 4800 },
  { name: 'Jun', Homework: 2390, Absentee: 3800 },
  { name: 'Jul', Homework: 3490, Absentee: 4300 },
];

const ActivityBarChart = () => {
  return (
    <div className="bar-chart-container">
      <h2>Monthly Activity Overview</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Homework" fill="#8884d8" />
        <Bar dataKey="Absentee" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ActivityBarChart;
