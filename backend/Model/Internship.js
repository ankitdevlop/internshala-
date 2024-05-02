const mongoose=require("mongoose")
 const InternshipShcema=new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    Duration: String,
    category: String,
    aboutCompany:String,
    aboutInternship:String,
    Whocanapply: String,
    perks: Array,
    AdditionalInfo:String,
    stipend: String,
    StartDate:String,
    
    createAt:{
        type:Date,
        default:Date.now,
    },

   
   
 })
 module.exports=mongoose.model("Internship",InternshipShcema)



 
    