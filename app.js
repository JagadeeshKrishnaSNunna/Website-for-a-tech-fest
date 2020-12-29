const express=require('express')
const app=express()
const path=require('path')
const bodyParser = require('body-parser')


const mongoose = require('mongoose');
mongoose.connect( process.env.MONGO_URI ||'mongodb://localhost:27017/registers',{ useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection
con.on('open', function () { console.log("mogoDB connection established  successfully..!") })
const regdb = require('./public/model/regDB');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'views','index.html'))
    
})
app.get('/Events',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'views','events.html'))
    
})
app.get('/sponsors',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'views','sponsors.html'))
    
})
app.get('/Team',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'views','team.html'))
    
})
app.get('/Contactus',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'views','contactus.html'))
    
})


app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','register.html'))
})
app.post('/register',async(req,res)=>{
    try{
       const regDb=new regdb({
           _id:req.body.event,
           email:req.body.emailid,
           Name:req.body.firstname+req.body.lastname,
           team:req.body.team,
           college:req.body.college
       })
       const s=await regDb.save()
       console.log(regDb)
    }
    
    catch(e){console.log(e);}
    
    res.redirect('/')
})




app.listen(9000,()=>{console.log("Server Started Suceessfull at port :9000...!");})