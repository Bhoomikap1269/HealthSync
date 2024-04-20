import React from 'react';
import './TermsOfService.css';

function TermsOfService() {
    return (
        <div className="terms-container">
            <h2>Terms of Service</h2>
            <p>Welcome to our platform. By accessing or using our services, you agree to abide by the following terms and conditions:</p>
            
            <h3>1. Acceptance of Terms</h3>
            <p>By using our platform, you agree to these terms and conditions. If you do not agree, you may not use our services.</p>

            <h3>2. User Responsibilities</h3>
            <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.</p>

            <h3>3. Intellectual Property</h3>
            <p>All content on our platform, including text, graphics, logos, and images, is the property of our company and is protected by copyright laws.</p>

            <h3>4. Limitation of Liability</h3>
            <p>We are not liable for any damages or losses resulting from the use of our platform, including but not limited to direct, indirect, incidental, or consequential damages.</p>
            
            {/* Privacy Policy Section */}
            <h2>Privacy Policy</h2>
            <p>Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information:</p>

            <h3>1. Information Collection</h3>
            <p>We collect personal information when you register an account, use our services, or interact with our platform. This may include your name, email address, and contact details.</p>

            <h3>2. Information Usage</h3>
            <p>We use your personal information to provide and improve our services, communicate with you, and personalize your experience. We do not sell or share your information with third parties.</p>

            <h3>3. Data Security</h3>
            <p>We implement security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

            <h3>4. Changes to Privacy Policy</h3>
            <p>We reserve the right to update our Privacy Policy at any time. Any changes will be effective immediately upon posting on this page.</p>
        </div>
    );
}

export default TermsOfService;
