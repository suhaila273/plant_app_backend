const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const plantRoute=require("./controllers/plantRouter")

const app=express()

app.use(express.json())
app.use(cors())

//connecting to monngodb
mongoose.connect("mongodb+srv://suhaila:suhaila273@cluster0.azy349s.mongodb.net/plantDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)


app.use("/api/plant",plantRoute)

app.listen(3001,()=>{
    console.log("server running")
})