const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const User=require('./user.model.js');

const interviewerSchema=new Schema({
    interviewesScheduled:[{type:mongoose.Types.ObjectId,ref:'Interview'},],
    currentCompany:{type:String, default:''},
})

const Interviewer=mongoose.model('Interviewer',interviewerSchema);
module.exports=Interviewer;