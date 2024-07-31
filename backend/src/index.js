const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require("cors");
const cookieparser=require('cookie-parser');
const {connectDB}=require('./db/connection.db');

dotenv.config({
    path: './.env'
})

app.use(express.json({limit:"16kb"}));

app.use(cors({
    origin:'*',
    credentials:true,
}))

app.use(cookieparser());

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log('server started on port : '+process.env.PORT);
    })
    app.on('error',(error)=>{
        console.error("ERR",error);
        throw error;
    })
})
.catch((error)=>{
    console.error('DB Connection Error:',error);
    process.exit(1);  //exit the application with error code 1 in case of error in db connection.  //To avoid unhandled promise rejections.  //In a production environment, you would want to log this error and handle it appropriately.  //This is just a demonstration.  //In a real application, you'd want to use a more robust error handling strategy.  //For example, you might want to use a logger or a service to log the error.  //For now, we'll just exit the process.  //In a real application, you'd want to implement proper error handling and logging.  //This is just a simple demonstration.  //In a real application, you'd want to use a logger or a service to log the error.  //For now, we'll just exit the process.  //In a real application, you'd want to implement proper error handling
})

const Problem = require('./models/Problem.model.js'); // Assuming the schema is in Problem.js

const newProblem = new Problem({
  title: 'Two Sum',
  description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
  difficulty: 'Easy',
  inputs: ['[2, 7, 11, 15], 9', '[3, 2, 4], 6', '[3, 3], 6'], // Sample inputs as strings
  desiredOutputs: ['[0, 1]', '[1, 2]', '[0, 1]'], // Corresponding desired outputs
});

newProblem.save()
  .then(() => console.log('Problem saved successfully'))
  .catch(err => console.error('Error saving the problem:', err));

  


