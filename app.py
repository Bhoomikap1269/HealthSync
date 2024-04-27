from flask import Flask
from flask_restful import Api
from appointment import schedule_appointment, get_appointments
from doctor import Doctors, Doctor
from login import login
from patient import Patients, Patient
from signup import signup

app = Flask(__name__)
api = Api(app)

# Appointment routes
app.route('/schedule-appointment', methods=['POST'])(schedule_appointment)
app.route('/appointments', methods=['GET'])(get_appointments)

# Doctor routes
api.add_resource(Doctors, '/doctors')
api.add_resource(Doctor, '/doctor/<int:id>')

# Patient routes
api.add_resource(Patients, '/patients')
api.add_resource(Patient, '/patient/<int:id>')

# Login route
app.route('/api/login', methods=['POST'])(login)

# Signup route
app.route('/signup', methods=['POST'])(signup)

if __name__ == '__main__':
    app.run(debug=True)
