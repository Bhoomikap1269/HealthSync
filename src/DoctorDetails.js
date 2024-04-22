import React, { useState, useEffect } from 'react';
import './DoctorDetails.css';
import axios from 'axios';


function DoctorDetails() {
    // Sample doctor details data
    const doctorDetailsData = [
        { id: 1, name: "Dr. John Doe", specialization: "Cardiologist", experience: 15, contact: "123-456-7890", clinicAddress: "123 Street, City, Country" },
        { id: 2, name: "Dr. Jane Smith", specialization: "Dermatologist", experience: 10, contact: "987-654-3210", clinicAddress: "456 Avenue, City, Country" },
        { id: 3, name: "Dr. Michael Johnson", specialization: "Pediatrician", experience: 8, contact: "555-123-4567", clinicAddress: "789 Road, City, Country" },
        { id: 4, name: "Dr. Emily Brown", specialization: "Neurologist", experience: 12, contact: "111-222-3333", clinicAddress: "101 Boulevard, City, Country" },
        { id: 5, name: "Dr. David Wilson", specialization: "Orthopedic Surgeon", experience: 20, contact: "444-555-6666", clinicAddress: "202 Lane, City, Country" },
    ];

    // State for storing doctor details
    const [doctorDetails, setDoctorDetails] = useState([]);

    // Use useEffect to set the doctor details data
    useEffect(() => {
        const fetchDoctorDetails = async () => {
            try {
                const response = await axios.get('/api/doctors'); // Make GET request to fetch doctor details
                setDoctorDetails(response.data); // Set doctor details state with data from the response
            } catch (error) {
                console.error('Error fetching doctor details:', error);
            }
        };

        fetchDoctorDetails();
        // Simulating fetching doctor details from an API endpoint
        setDoctorDetails(doctorDetailsData);
    }, []);

    return (
        <div className="doctor-details-container">
            <h2>Doctor Details</h2>
            <div className="doctor-details-cards">
                {doctorDetails.map(doctor => (
                    <div className="doctor-details-card" key={doctor.id}>
                        <p><strong>Name:</strong> {doctor.name}</p>
                        <p><strong>Specialization:</strong> {doctor.specialization}</p>
                        <p><strong>Experience:</strong> {doctor.experience} years</p>
                        <p><strong>Contact:</strong> {doctor.contact}</p>
                        <p><strong>Clinic Address:</strong> {doctor.clinicAddress}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DoctorDetails;
