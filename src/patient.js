// Assuming you have an API endpoint to fetch patient details
function fetchPatientDetails() {
    // Replace with the actual API endpoint
    const apiUrl = '/api/patient/details';
  
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include authentication headers if necessary
      },
    })
    .then(response => response.json())
    .then(data => {
      displayProfile(data.profile);
      displayMedicalHistory(data.medicalHistory);
      displayAppointmentHistory(data.appointmentHistory);
      displayTestResults(data.testResults);
    })
    .catch(error => console.error('Error fetching patient details:', error));
  }
  
  function displayProfile(profile) {
    // Update the DOM with patient profile information
    document.getElementById('patientName').textContent = profile.name;
    document.getElementById('patientEmail').textContent = profile.email;
    // Add more profile fields as needed
  }
  
  function displayMedicalHistory(medicalHistory) {
    const medicalHistoryContainer = document.getElementById('medicalHistory');
    medicalHistoryContainer.innerHTML = ''; // Clear existing content
  
    medicalHistory.forEach(historyItem => {
      const item = document.createElement('div');
      item.className = 'medical-history-item';
      item.innerHTML = `
        <h4>${historyItem.date}</h4>
        <p>Diagnosis: ${historyItem.diagnosis}</p>
        <p>Treatment: ${historyItem.treatment}</p>
        <!-- Add more details as needed -->
      `;
      medicalHistoryContainer.appendChild(item);
    });
  }
  
  function displayAppointmentHistory(appointmentHistory) {
    const appointmentHistoryContainer = document.getElementById('appointmentHistory');
    appointmentHistoryContainer.innerHTML = ''; // Clear existing content
  
    appointmentHistory.forEach(appointment => {
      const item = document.createElement('div');
      item.className = 'appointment-item';
      item.innerHTML = `
        <h4>${appointment.date}</h4>
        <p>Doctor: ${appointment.doctorName}</p>
        <p>Status: ${appointment.status}</p>
        <!-- Add more details as needed -->
      `;
      appointmentHistoryContainer.appendChild(item);
    });
  }
  
  function displayTestResults(testResults) {
    const testResultsContainer = document.getElementById('testResults');
    testResultsContainer.innerHTML = ''; // Clear existing content
  
    testResults.forEach(testResult => {
      const item = document.createElement('div');
      item.className = 'test-result-item';
      item.innerHTML = `
        <h4>${testResult.date}</h4>
        <p>Test: ${testResult.testName}</p>
        <p>Result: ${testResult.result}</p>
        <!-- Add more details as needed -->
      `;
      testResultsContainer.appendChild(item);
    });
  }
  
  // Call this function when the page loads
  fetchPatientDetails();