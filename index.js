const express=require("express")
const PORT = process.env.PORT ||5000
const app= express()
const passport =require('passport')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const config= require('./config/config')
const mongoose =require('mongoose')
require('./models/user')
mongoose.connect(config.mongoDbUrl,{useNewUrlParser:true,useUnifiedTopology:true}).catch(err=>{
    console.log(err)
})
app.use(bodyParser.json())
app.use(cookieSession({
    maxAge:30 *24 * 60 *60 *1000,
    keys:[config.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())
require('./services/passportJS/passport')
require('./routes/passportRoutes/passport')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes.js')(app)
if(process.env.NODE_ENV==="production")
{
    app.use(express.static('client/build'))
    const path =require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client',`build`,`index.html`))
    })
}
app.listen(PORT,(err)=>{
    console.log("Working",err)
})