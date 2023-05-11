import express from "express";
import path from "path"

const app = express();

app.get("/", (req,res)=>{
    const pathLocation = path.resolve();
    
    // res.send(pathLocation);
    // console.log(pathLocation)
    res.sendFile(path.join(pathLocation, "./index.html"))
    
})


app.get("/get-products", (req, res)=>{
    // res.send("hiiii");
    res.json({
        success:true,
        products:[],
    })
})

app.get("/milega", (req, res)=>{
    // res.send("hiiii");
   res.status(404).send("nahi milega vro")
})

app.listen(5000,()=>{
    console.log("server is working")
}) 