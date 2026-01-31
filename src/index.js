import dotenv from "dotenv";

import{DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";
dotenv.config({
    path:".env"
});



connectDB();










// import express from "express";
// const app=express()
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error",
//             (error)=>{console.error("Error in server connection:",error)}
//         )
// app.listen(process.env.PORT,()=>{
//     console.log(`App is Listing on port ${process.env.PORT}`);
// })
//     }
//     catch(error){
//         console.error("Database connection error:", error);
//         throw

//     }
// })()