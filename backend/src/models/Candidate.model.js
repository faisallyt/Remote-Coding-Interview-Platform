const mongoose=require('mongoose');
const Schema = mongoose.Schema;
const User=require('./user.model.js');
const Interviewer = require('./Interviewer.model');


const CandidateSchema=new Schema({
    InterviewsScheduled:[{type:mongoose.Types.ObjectId, ref:'Interview'}],
    resume:{type:String, default:''},
    collegeName:{type:String, default:''}
})

const Candidate=User.discriminator('Candidate',CandidateSchema);

module.exports=Candidate;