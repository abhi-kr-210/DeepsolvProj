import mongoose from 'mongoose';

const PostSchema=new mongoose.Schema({
    page:{
        type:mongoose.Schema.Types.ObjectId,ref:'Page'
    },
    content:String,
    likes:Number,
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comment'}],
    created_at:Date
    
});

export const Post= mongoose.model('Post', PostSchema);