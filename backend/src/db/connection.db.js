const mongoose = require('mongoose');


const connectDB=async ()=>{
    try{
        console.log(process.env.MONGODB_URI)
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log(`\n MongoDB connection Done !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);
    }
}

module.exports={
    connectDB
}
