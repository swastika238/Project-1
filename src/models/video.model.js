import mongoose from "mongoose";
const videosSchema=new Schema(
    {
        videoFile:{
            type:String,
            // cloudinaryurl
            required:true,

        },
        thumbnail:{
            type:String,
            required:true
        },
        discription:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isPublished:{
            typoe:Boolean,
            default:true

        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
            
        }

    }
)
export const Video=mongoose.video("Video",videosSchema)