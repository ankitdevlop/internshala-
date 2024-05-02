const mongoose=require("mongoose")
 const applicationShcema=new mongoose.Schema({
    company:String,
    category:String,
    coverLetter:String,
    createAt:{
        type:Date,
        default:Date.now,
    },
    Application:Object,
    user:Object,
    status:{
        type:String,
        enum:["pending","accepted","rejected"],
        default:"pending"
    }
 })
 module.exports=mongoose.model("Application",applicationShcema)