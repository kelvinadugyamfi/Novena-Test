const{Sequelize, DataTypes} = require('sequelize')
const sequelConnect = require ('../dbConnect')

const Appointment = sequelConnect.define('Appointment',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    department : {
        type : DataTypes.STRING,
    },
    doctors : {
        type : DataTypes.STRING,
    },
    date : {
        type : DataTypes.DATEONLY,
    },
    time : {
        type : DataTypes.TIME,
    },
    fullName : {
        type : DataTypes.STRING,
        allowNull :false,
    },
    phoneNumber : { 
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    message : {
        type : DataTypes.TEXT,
        allowNull : false,
    }
})

Appointment.sync()

module.exports = Appointment

