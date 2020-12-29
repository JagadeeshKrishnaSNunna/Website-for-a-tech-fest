const mongoose=require('mongoose')


const Query=mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    natureOfQuery:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    query:{
        type:String,
        required:true
    }
})


module.exports=mongoose.model('Query',Query)