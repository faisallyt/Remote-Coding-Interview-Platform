const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require("cors");
const cookieparser=require('cookie-parser');

dotenv.config({
    path: './.env'
})

app.use(express.json({limit:"16kb"}));

app.use(cors({
    origin:'*',
    credentials:true,
}))

app.use(cookieparser());


app.listen(8000,()=>{
    console.log('server is running on port 8000');
})
