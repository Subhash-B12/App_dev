import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Importing Home component
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import EnquiryForm from './components/EnquiryForm/EnquiryForm';
import EnquiryList from './components/EnquiryList/EnquiryList';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ProfilePage from './components/ProfilePage/ProfilePage';
import StudentDetails from './components/StudentDetails/StudentDetails';
import PrivateRoute from './components/PrivateRoute';
import Professor from './components/Professors/Professor';
import StudentDirectory from './components/StudentDirectory/StudentDirectory';
import CourseList from './components/CourseList/CourseList';
import EnrollmentForm from './components/EnrollmentForm/EnrollmentForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/enquiry" element={<EnquiryForm />} />
        <Route path="/enquiry-list" element={<EnquiryList />} />
        <Route path="/student-details/:rollNumber" element={<StudentDetails />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/professors" element={<Professor />} />
        <Route path="/student-directory" element={<StudentDirectory />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/enroll" element={<EnrollmentForm />} />
        <Route
          path="/profile"
          element={<PrivateRoute element={<ProfilePage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
