import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import SignUp from './Signup';
import Login from './Login';
import AboutUs from './AboutUs';
import DoctorDetails from './DoctorDetails';
import PatientDetails from './PatientDetails';
import Services from './Services'; 
import TermsOfService from './TermsOfService';


const App = () => {
    return (
        <Router>
            <Routes>
                {/* Define the routes */}
                <Route path="/" element={<FrontPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/about" element={<AboutUs />} /> 
                <Route path="/doctor-details" element={<DoctorDetails />} />
                <Route path="/patient-details" element={<PatientDetails />} />
                <Route path="/services" element={<Services />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>

        </Router>
    );
};

export default App;
