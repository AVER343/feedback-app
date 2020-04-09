const auth = require('../middlewares/auth')
const mongoose= require('mongoose')
const Survey = mongoose.model('surveys')
const credits=require('../middlewares/credits')
const Mailer= require('../services/mailers/mailer')
const template= require('../services/mailers/template')
module.exports=(app)=>{
    app.post('/api/surveys',auth,credits,async (req,res)=>{
        const {title,subject,recipients,body}=req.body
       const setSurvey= await new Survey({
                                        title,
                                        subject,
                                        body,
                                        recipients:recipients.split(',').map(email=>({email})),
                                        _user:req.user.id,
                                        DateSent:Date.now()
                                        })
                const mailer = new Mailer(setSurvey,template(setSurvey))
                mailer.send()
            }
)}