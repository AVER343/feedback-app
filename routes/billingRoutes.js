const config = require('../config/config')
const User = require('../models/user')
const auth=require('../middlewares/auth')
const stripe=require('stripe')(config.Secret_key)
module.exports=(app)=>{
    app.post('/api/stripe',auth,async (req,res)=>{
        if(!req.user)
        {
            return res.status(401)
        }
      try{ 
             const charge = await stripe.paymentIntents.create({
            amount: 500,
            currency: 'usd',
            description: 'Software development services',
          })
          
        req.user.credits=req.user.credits+5;
          const user = await req.user.save()
          res.send(user)
    }
        catch(e){
            console.log(e)
        }
        
       
    })
}