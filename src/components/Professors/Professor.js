import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Adjust the import path as needed

import './Professor.css';

const teachingProfessors = [
  {
    name: 'Robert Jr',
    designation: 'Professor',
  },
  {
    name: 'Dr Dhumakethu',
    designation: 'Assistant Professor',
  },
  {
    name: 'Dr K. SENTHILKUMAR',
    designation: 'Professor',
  },
  {
    name: 'Prof N PONPANDIAN',
    designation: 'Professor and Head',
  },
  {
    name: 'Dr A. ANAND',
    designation: 'Associate Professor',
  },
  {
    name: 'Dr B. MANOHAR',
    designation: 'Assistant Professor',
  }
];

const nonTeachingStaff = [
  {
    name: 'Mr A. BHARATH',
    designation: 'Administrative Officer',
  },
  {
    name: 'Ms B. SHWETA',
    designation: 'Lab Technician',
  },
  {
    name: 'Mr C. MANI',
    designation: 'Library Assistant',
  },
  {
    name: 'Ms D. PRIYA',
    designation: 'Office Assistant',
  },
  {
    name: 'Mr E. KUMAR',
    designation: 'Maintenance Supervisor',
  },
  {
    name: 'Ms F. LATHA',
    designation: 'Administrative Assistant',
  },
  {
    name: 'Mr G. RAM',
    designation: 'IT Support Specialist',
  },
  {
    name: 'Ms H. REKHA',
    designation: 'Clerical Staff',
  },
];

const Professor = () => {
  const [activeTab, setActiveTab] = useState('teaching');
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderProfessors = (professors) => {
    return professors.map((professor, index) => (
      <div className="professor-card" key={index}>
        <div className="professor-details">
          <h3 className="professor-name">{professor.name}</h3>
          <p className="professor-designation">{professor.designation}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <Navbar hideAuthButtons={true} />
      <div className="professor-container">
        <h1 className="professor-heading">Professors</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'teaching' ? 'active' : ''}`}
            onClick={() => handleTabClick('teaching')}
          >
            Teaching
          </button>
          <button
            className={`tab ${activeTab === 'nonTeaching' ? 'active' : ''}`}
            onClick={() => handleTabClick('nonTeaching')}
          >
            Administrative/Non-Teaching
          </button>
        </div>
        <div className="filter-section">
          <select className="department-select">
            <option value="">- Any -</option>
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            {/* Add more departments here */}
          </select>
          <div className="search-bar">
            <input type="text" placeholder="Search by Name" />
            <button className="search-button">🔍</button>
          </div>
        </div>
        <div className="professor-cards">
          {activeTab === 'teaching' && renderProfessors(teachingProfessors)}
          {activeTab === 'nonTeaching' && renderProfessors(nonTeachingStaff)}
        </div>
      </div>
    </div>
  );
};

export default Professor;
