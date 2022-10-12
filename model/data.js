const mongoose=require('mongoose');

const apiSchema=new mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    
},{
    //time stamps is for create at and updated at 
    timestamps:true
});
const Api=mongoose.model('Api',apiSchema);

module.exports=Api;