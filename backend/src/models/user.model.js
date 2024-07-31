const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const options={discriminator:'role'};

const BaseUserSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile:{type:String,default:''},
    bio:{type:String,default:''},
    created_at:{type:Date,required:true},
    updated_at:{type:Date,required:true},
},options);

const User=mongoose.model('User',BaseUserSchema);

module.exports=User;