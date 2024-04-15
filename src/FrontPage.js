import React from 'react';
import logo from './logo.png'; // Adjust the path to the logo file if necessary
import './FrontPage.css'; // Importing CSS file for styles

function FrontPage() {
    return (
        <div className="front-page">
            {/* Hero section */}
            <div className="hero-section">
                {/* Centered logo */}
                <div className="logo-container">
                    <img src={logo} alt="HealthSync Logo" className="logo" />
                </div>

                <h1>Welcome to HealthSync</h1>
                <p>Streamlining Healthcare Management for Optimal Patient Care</p>

                {/* Call-to-action button */}
                <button className="cta-button">Get Started</button>
            </div>

            {/* Features section */}
            <div className="features-section" id="features">
                <h2>Our Features</h2>
                <div className="features-cards">
                    <div className="feature-card">
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

            {/* Contact section */}
            <div className="contact-section" id="contact">
                <h2>Contact Us</h2>
                <div className="contact-details">
                    <p>Email: contact@healthsync.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Follow us on:</p>
                    <ul className="social-links">
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;



