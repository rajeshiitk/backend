import express from "express";
import path from "path"

const app = express();
// express.static(path.join(path.resolve(), "./public")); // it's middleware we can't use it directly
app.use(express.static(path.join(path.resolve(), "./public")));
// console.log(path.join(path.resolve(), "./public"))

app.set("view engine", "ejs")
app.get("/render", (req,res)=>{
    res.render("index", {name:"Rajesh"});
})

// app.get("/static-html", (req,res)=>{
//     res.send()
// })

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