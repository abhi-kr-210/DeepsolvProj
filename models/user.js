import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    profile_pic:String,
    facebook_id:String
    
});
    
export const User= mongoose.model('User',UserSchema);