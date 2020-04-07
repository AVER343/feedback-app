const express=require("express")
const PORT = process.env.PORT ||3000
const app= express()
const passport =require('passport')
const cookieSession = require('cookie-session')
const config= require('./config/config')
const mongoose =require('mongoose')
require('./models/user')
mongoose.connect(config.mongoDbUrl,{useNewUrlParser:true,useUnifiedTopology:true}).catch(err=>{
    console.log(err)
})
app.use(cookieSession({
    maxAge:30 *24 * 60 *60 *1000,
    keys:[config.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())
require('./services/passportJS/passport')
require('./routes/passportRoutes/passport')(app)
app.listen(PORT,(err)=>{
    console.log("Working",err)
})