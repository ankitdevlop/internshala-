const mongoose=require("mongoose")
 const JobShcema=new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    Experience: String,
    category: String,
    aboutCompany:String,
    aboutJob:String,
    Whocanapply: String,
    perks: Array,
    AdditionalInfo:String,
    CTC: String,
    StartDate:String,
    
    createAt:{
        type:Date,
        default:Date.now,
    },

   
   
 })
 module.exports=mongoose.model("Job",JobShcema)



 
    