from doctor import Doctor, Doctors
from flask import Flask
from flask_restful import Api
from login import login
from patient import Patient, Patients
from signup import signup

from package import model
from package.model import conn

app = Flask(__name__)
api = Api(app)

# Signup and Login routes
api.add_resource(signup.Signup, '/signup')
api.add_resource(login.Login, '/login')

# Doctor routes
api.add_resource(Doctors, '/doctors')
api.add_resource(Doctor, '/doctor/<int:id>')

# Patient routes
api.add_resource(Patients, '/patients')
api.add_resource(Patient, '/patient/<int:id>')

if __name__ == "__main__":
    app.run(debug=True)
