const express=require('express')
const app=express()
const path=require('path')


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
    res.redirect('/Team')
})




app.listen(9000,()=>{console.log("Server Started Suceessfull at port :9000...!");})