import React from 'react';
import './PatientDetails.css';

function PatientDetails() {
    // Sample patient details data
    const patientDetailsData = [
        { id: 1, name: "Alice Smith", age: 35, gender: "Female", contact: "123-456-7890", address: "123 Street, City, Country" },
        { id: 2, name: "Bob Johnson", age: 45, gender: "Male", contact: "987-654-3210", address: "456 Avenue, City, Country" },
        { id: 3, name: "Carol Williams", age: 50, gender: "Female", contact: "555-123-4567", address: "789 Road, City, Country" },
        { id: 4, name: "David Brown", age: 28, gender: "Male", contact: "111-222-3333", address: "101 Boulevard, City, Country" },
        { id: 5, name: "Eva Taylor", age: 60, gender: "Female", contact: "444-555-6666", address: "202 Lane, City, Country" },
        { id: 6, name: "Frank Martinez", age: 42, gender: "Male", contact: "222-333-4444", address: "303 Street, City, Country" },
        { id: 7, name: "Grace Lee", age: 55, gender: "Female", contact: "777-888-9999", address: "404 Avenue, City, Country" },
        { id: 8, name: "Henry Clark", age: 33, gender: "Male", contact: "999-888-7777", address: "505 Road, City, Country" },
        { id: 9, name: "Isabel Garcia", age: 48, gender: "Female", contact: "666-555-4444", address: "606 Boulevard, City, Country" },
        { id: 10, name: "Jackie Young", age: 38, gender: "Female", contact: "333-222-1111", address: "707 Lane, City, Country" },
    ];

    return (
        <div className="patient-details-container">
            <h2>Patient Details</h2>
            <div className="patient-details-cards-container">
                <div className="patient-details-cards">
                    {patientDetailsData.map(patient => (
                        <div className="patient-details-card" key={patient.id}>
                            <p><strong>Name:</strong> {patient.name}</p>
                            <p><strong>Age:</strong> {patient.age}</p>
                            <p><strong>Gender:</strong> {patient.gender}</p>
                            <p><strong>Contact:</strong> {patient.contact}</p>
                            <p><strong>Address:</strong> {patient.address}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PatientDetails;
