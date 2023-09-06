const express = require ('express')
const dotEnv = require ('dotenv')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')
const sequelize = require ('./database/dbConnect')

dotEnv.config()
 
port = process.env.PORT || 1200

const app = express()


app.set('view engine','ejs')
app.set('views',__dirname + '/views/pages')
app.set('layout', __dirname + '/views/layout')

// setting view
app.use(expressLayouts)

app.use(express.static(__dirname+'/public'))


// bdy parser middle to handle request
app.use(bodyParser.urlencoded({ extended: false }))

// userRoute
app.use('/',userRoute)


const startServer = async () =>{
   try{ 
        await sequelize.authenticate();
        app.listen(port, ()=>{
        console.log(`server connected on http://localhost:${port}`)
        })
    } catch(e){ 
    console.log('database connection error')
    }
}

startServer()

