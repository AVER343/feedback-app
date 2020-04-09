const {Schema} =require('mongoose')
const RecipientSchema=require('./recipient.js')
const SurveySchema=new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[RecipientSchema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'users'},
    DateSent:Date,
    lastResponded:Date
})
mongoose.model('surveys',SurveySchema)