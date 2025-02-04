import mongoose from "mongoose";
const CommentSchema=new mongoose.Schema({
    post:{type:Schema.Types.ObjectId,ref:'Post'},
    user:String,
    text:String,
    created_at:Date
    
});
    
export const Comment= mongoose.model('Comment',CommentSchema);