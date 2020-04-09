const passport=require('passport')
const config = require(`../../config/config`)
const GoogleStrategy = require('passport-google-oauth20')
const mongoose =require('mongoose')
var server=`http://localhost:3000`
if(process.env.NODE_ENV==='production')
{
    server=`http://mern-feedback-app.herokuapp.com/`
}
const User= mongoose.model('users')
passport.use(new GoogleStrategy({
                clientID:config.GoogleOAuth.web.client_id,
                clientSecret:config.GoogleOAuth.web.client_secret,
                callbackURL:`${server}/auth/google/callback`,
                proxy:true},
                async (accessToken,refreshToken,profile,done)=>
                    {
                        const existingUser=await User.findOne({googleID:profile.id})
                            if(existingUser)
                            {
                                done(null,existingUser)
                            }
                            else
                            {
                                const user = new User({googleID:profile.id,gmail:profile.emails[0].value})
                                await user.save()
                                await done(null,user) 
                            }
                     
                    }
            ))
passport.serializeUser((user,done)=>{
    done(null,user.id)
    })
passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>done(null,user))
    })