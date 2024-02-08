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

router.get("/view",async(req,res)=>{
    let data=await plantModel.find()
    res.json(data)
})

module.exports=router