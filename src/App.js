import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import EnquiryForm from './components/EnquiryForm/EnquiryForm';
import EnquiryList from './components/EnquiryList/EnquiryList'; // Import EnquiryList
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ProfilePage from './components/ProfilePage/ProfilePage';
import StudentDetails from './components/StudentDetails/StudentDetails'; // Import StudentDetails
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/enquiry-list" element={<EnquiryList />} /> {/* Add EnquiryList route */}
        <Route path="/student-details/:rollNumber" element={<StudentDetails />} /> {/* Add StudentDetails route */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        /> {/* Protect the ProfilePage route */}
      </Routes>
    </Router>
  );
}

export default App;
