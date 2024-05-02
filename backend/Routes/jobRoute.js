const express =require("express")
const router= express.Router();
const Job=require("../Model/Jobs");



router.post("/",async (req,res)=>{
    const JobData=new Job({
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        Experience: req.body.experience,
        category: req.body.category,
        aboutCompany:req.body.aboutCompany,
        aboutInternship:req.body.aboutInternship,
        Whocanapply: req.body.Whocanapply,
        perks: req.body.perks,
        AdditionalInfo:req.body.AdditionalInfo,
        CTC: req.body.ctc,
        StartDate:req.body.StartDate,
    })
    await JobData.save().then((data)=>{
        res.send(data)
    }).catch((error)=>{
        console.log(error,"not able to post the data")
    })
})

router.get("/",async (req,res)=>{
    try {
        const data=await Job.find();
        res.json(data) .status(200)
    } catch (error) {
        console.log(error);
        res.status(404).json({error:"Internal server error "})
    }
})


router.get("/:id", async (req,res)=>{
    const {id}=req.params;
    try {
        const data=await Job.findById(id);
        if (!data) {

             res.status(404).json({error:"Internship is not found "})
        }
        res.json(data) .status(200)
    } catch (error) {
        console.log(err);
        res.status(404).json({error:"Internal server error "})
    }
})
module.exports=router