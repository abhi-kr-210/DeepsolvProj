import mongoose from 'mongoose';

const PageSchema=new mongoose.Schema({
username:String,
name:String,
url:String,
profile_pic:String,
email:String,
website:String,
category:String,
total_followers:Number,
total_likes:Number,
created_at:Date,
posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
followers:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
following:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]
});
export default mongoose.model('Page',PageSchema);
