import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema=newSchema({
    username:{
        type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
        // for enabling searching field we do index true


    },
    email:{
         type:String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true

    },
    fullname:{
        type:String,
        required:true,
        tr3im:true,
        index:true
    },
    avatar:{
        type:String ,
        // cloudinary Url
        required:true,

    },
    coverImage:{
        type:String

    },
    watchHistory:[{
        trype:Schema.Types.ObjectID


    }
],
password:{
    type:String,
    required:[true,'Password is required']
},
refreshToken:
{
    type:String
}
}
)
userSchema.pre("save",async function(next ){
    if(this.isModified("password")){
    this.password=bcrypt.hash(this.password,10)
    next()
}
}

)
userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}


export const User=mongoose.model("User",userSchema)