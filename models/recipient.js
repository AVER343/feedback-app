const {Schema}=require('mongoose')
const RecipientSchema = requireSchema({
    email:String,
    voted:{type:Boolean,default:false}
})
module.exports=RecipientSchema