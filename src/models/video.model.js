import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 

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
videosSchema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.video("Video",videosSchema)