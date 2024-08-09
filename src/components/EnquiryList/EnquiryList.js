import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './EnquiryList.css';

const EnquiryList = () => {
  const [rollNumber, setRollNumber] = useState('');
  const navigate = useNavigate();

  const handleRollNumberChange = (e) => {
    setRollNumber(e.target.value);
  };

  const handleSubmit = () => {
    if (rollNumber) {
      navigate(`/student-details/${rollNumber}`);
    }
  };

  return (
    <div className="enquiry-list-container">
      <div className="enquiry-input-container">
        <div className="profile-icon-container">
          <AccountCircleIcon className="profile-icon" />
          <label htmlFor="rollNumber" className="roll-number-label">Roll Number:</label>
        </div>
        <div className="input-group">
          <input 
            type="text" 
            id="rollNumber" 
            value={rollNumber} 
            onChange={handleRollNumberChange} 
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default EnquiryList;
