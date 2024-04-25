from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from package.model import conn

app = Flask(__name__)
api = Api(app)

class Receipt(Resource):
    def post(self):
        """Generate receipt for an appointment"""

        appointment_data = request.get_json(force=True)

        # Assuming appointment_data contains necessary information like patient name, doctor name, appointment date, etc.
        patient_name = appointment_data['patient_name']
        doctor_name = appointment_data['doctor_name']
        appointment_date = appointment_data['appointment_date']
        # Add more data as needed
        
        # Here you can format your receipt as per your requirements
        receipt_content = f"Receipt for appointment\nPatient Name: {patient_name}\nDoctor Name: {doctor_name}\nAppointment Date: {appointment_date}\n"
        # Add more content as needed

        # Save receipt data to the database if necessary
        
        return {'receipt_content': receipt_content}

api.add_resource(Receipt, '/generate_receipt')

def generate_receipt(patient_name, doctor_name, appointment_date):
    # Create a new PDF
    c = canvas.Canvas("receipt.pdf", pagesize=letter)

    # Set up the PDF content
    c.setFont("Helvetica", 12)
    c.drawString(100, 750, "Receipt")
    c.drawString(100, 730, "---------------------")
    c.drawString(100, 710, f"Patient Name: {patient_name}")
    c.drawString(100, 690, f"Doctor Name: {doctor_name}")
    c.drawString(100, 670, f"Appointment Date: {appointment_date}")

    # Save the PDF
    c.save()

    return "receipt.pdf"

if __name__ == '__main__':
    app.run(debug=True)
