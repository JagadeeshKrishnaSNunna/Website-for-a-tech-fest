const mongoose=require('mongoose')

const registered=new mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    team:{
        type:Number,
        required:true,
    },
    college:{
        type:String,
        required:true,
    }

})

module.exports=mongoose.model('registered',registered)