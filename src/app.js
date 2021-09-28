const express=require("express");
const path=require("path")
const hbs=require('hbs')
const app=express();
const port=process.env.PORT || 4000;
// static path
const static_path=path.join(__dirname,"../public")
const templates_path=path.join(__dirname,"../Templates/views")
const partial_path=path.join(__dirname,"../Templates/Partial")

app.set('view engine', 'hbs');
app.set('views' ,templates_path)
app.use(express.static(static_path))
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.send("404 Error page oppss!")
})

app.listen(port,()=>{
    console.log(`sevrer is listing at port ${port}`)
})