const express=require("express")

const router=express.Router()

const plantModel =require("../model/plantModel")

router.post("/entry",async(req,res)=>{
    let data=req.body
    let plant=new plantModel(data)
    let result =await plant.save()
    res.json(
        {status:"success"}
    )
})



module.exports=router