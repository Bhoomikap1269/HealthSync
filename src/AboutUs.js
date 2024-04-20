import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';



function AboutUs() {
    // Add the handlePatientManagementClick function here if necessary
    const handlePatientManagementClick = () => {
        console.log('Patient Management feature clicked');
        // Add further functionality as required
    };

    return (
        <div className="about-us-container">
            <header className="header">
                <div className="services-link">
                    <Link to="/services" className="nav-link">Services</Link>
                </div>
            </header>
            {/* About HealthSync section */}
            <h2 className="about-us-heading">About Us</h2>
            <p className="about-us-description">
                HealthSync is a comprehensive healthcare management platform designed to streamline and optimize patient care. 
                Our mission is to bridge the gap between medical professionals and patients by offering an intuitive and efficient 
                platform that manages healthcare services seamlessly. With HealthSync, you can access your medical records, book 
                appointments, communicate with healthcare providers, and stay on top of your health journey.

                Our team is composed of passionate professionals dedicated to transforming the healthcare industry by leveraging 
                technology for better outcomes. We are constantly innovating to bring you the best experience possible.

                Join us in our journey to revolutionize healthcare management and make a positive impact on patient care.
            </p>


            {/* Features section */}
            <div className="features-section" id="features">
                <h2>Our Features</h2>
                <div className="features-cards">
                    <div className="feature-card" onClick={handlePatientManagementClick}>
                        <h3>Patient Management</h3>
                        <p>Streamlined patient management for better care continuity.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Electronic Health Records</h3>
                        <p>Secure and easy access to patient health records.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Appointment Scheduling</h3>
                        <p>Convenient online appointment scheduling for patients.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Billing and Payment Processing</h3>
                        <p>Automated billing and seamless payment processing.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Analytics and Reporting</h3>
                        <p>Data analytics for efficient resource allocation and decision-making.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials section */}
            <div className="testimonials-section" id="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonials-cards">
                    <div className="testimonial-card">
                        <p>"HealthSync has revolutionized the way we manage patient records!"</p>
                        <strong>- Dr. Smith</strong>
                    </div>
                    <div className="testimonial-card">
                        <p>"The app's scheduling feature has greatly improved our clinic's efficiency."</p>
                        <strong>- Dr. Johnson</strong>
                    </div>
                </div>
            </div>

            {/* Meet Our Team section */}
            <div className="team-section" id="team">
                <h2>Meet Our Team</h2>
                <div className="team-cards">
                    {/* Team member card example */}
                    <div className="team-card">
                      <img src={require('./Images/bh.jpg')} alt="Bhoomika Pathapati photo" className="team-photo"/>
                      <h3>Bhoomika Pathapati</h3>
                    </div>

                    <div className="team-card">
                        <img src={require('./Images/vedang.jpg')} alt="Vedang Jadhav photo" className="team-photo"/>
                        <h3>Vedang Jadhav</h3>
                    </div>
                    <div className="team-card">
                        <img src={require('./Images/yudheksha.jpg')} alt="Yudheksha Kavitha photo" className="team-photo"/>
                        <h3>Yudheksha Kavitha</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;


