const Appointment = require ('../database/models/appointment') 

const postAppointment = async (req, res)=>{
    const {department, doctors, date, time, fullName, 
        phoneNumber, message }= req.body
    await Appointment.create({department, doctors, date, time, fullName, 
        phoneNumber, message})

        res.redirect('/confirmation')
}


const home = (req, res)=>{
    res.render('index')
}

const about = (req, res)=>{
    res.render('about')
}

const contact = (req, res)=>{
    res.render('contact')
}

const services = (req, res)=>{
    res.render('services')
}

const appointment = (req, res)=>{
    res.render('appointment')
}

const doctors = (req, res)=>{
    res.render('doctors')
}

const departments = (req, res)=>{
    res.render('departments')
}

const singleDepartment = (req, res)=>{
    res.render('singleDepartment')
}

const singleDoctor = (req, res)=>{
    res.render('singleDoctor')
}

const confirmation = (req, res)=>{
    res.render('confirmation')
}


module.exports = {home, about, contact, services, appointment, doctors, departments, singleDepartment, singleDoctor, confirmation,postAppointment}