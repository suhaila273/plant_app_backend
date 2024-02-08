const mongoose=require("mongoose")

const plantSchema=new mongoose.Schema(
    {
        name:String,
        type:String,
        qty:String,
        price:String
    }
)

module.exports=mongoose.model("plants",plantSchema)