const express=require("express");
const bodyParser = require("body-parser");
const ejs=require("ejs");
const app=express();

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.sendFile("index.html");
});

app.get("/booking",(req,res)=>{
res.render("booking");
});



app.post("/booking",(req,res)=>{
    const body=req.body;
    console.log(body);
    res.render("successPage",{
        message: "Your Reservation Was Made Successfully!",
        path: "/"
    });
});


app.listen(process.env.PORT || 3000,()=>{
    console.log("The hotel server is running!");
});
