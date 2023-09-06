const express = require ('express')
const {home, about, contact, services, appointment, doctors, departments, singleDepartment, singleDoctor, confirmation, postAppointment} = require('../controllers/userController')

const app = express.Router()

app.get ('/',home)

app.get ('/about', about)

app.get ('/doctors', doctors)

app.get ('/services', services)

app.get ('/contact', contact)

app.get ('/appointment', appointment)

app.get ('/departments', departments)

app.get ('/singleDepartment', singleDepartment)

app.get ('/singleDoctor', singleDoctor)

app.get ('/confirmation', confirmation)

app.post('/appointment', postAppointment)





module.exports = app

