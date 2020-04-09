const sendGrid=require('sendgrid')
const helper =sendGrid.mail
const keys= require('../../config/config')
class Mailer extends helper.Mail{
     constructor({recipients, subject},content){
            super()
            this.sgApi=sendgrid(keys.Sendgrid_Secret)
            this.from_email=new helper.Email('noreply@feedbackapp.com')
            this.subject=subject
            this.body=new helper.Content('text/html',content)
            this.recipients=this.formatAddresses(recipients)
            this.addContent(this.body)
            this.addClickTracking()
            this.addRecipients()
     }
     addRecipients(){
         const personalize=new helper.Personalization()
         this.recipients.forEach(recipient => {
             personalize.addTo(recipient)
         })
         this.addPersonalization(personalize)
        }
     formatAddresses(recipients){
         return recipients.map(({email})=>{
             return new helper.Email(email)
         })
     }
     addClickTracking(){
         const trackingSettings=new helper.TrackingSettings()
         const clickTracking= new helper.ClickTracking(true,true)
         trackingSettings.setClickTracking(clickTracking)
         this.addTrackingSettings(trackingSettings)

     }
    async send()
    {
        const request=this.sgApi.emptyRequest({
            method: 'POST',
            path:'/v3/mail/send',
            body:this.toJSON()
        })
       const response= this.sgApi.API(request)
        return response
    }

}
module.exports=Mailer