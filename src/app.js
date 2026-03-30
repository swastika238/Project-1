import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';
// cookies are small pieces of data stored on the client side
// and sent to the server with each request


const app=express()
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser());


// routes import 
import  userRouter from "./routes/user.routes.js"



// routes declaration 
// 
app.use("/api/v1/users",userRouter)


export default app;
// CORS=Cross Origin RESOURCE SHARING
// request.get(client=>URL(Instagram)=>(request,res)=>(Rres.send))