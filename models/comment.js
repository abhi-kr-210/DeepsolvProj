import mongoose from "mongoose";
const CommentSchema=new mongoose.Schema({
    post:{type:mongoose.Schema.Types.ObjectId,ref:'Post'},
    user:String,
    text:String,
    created_at:Date
    
});
    
export default mongoose.model('Comment',CommentSchema);