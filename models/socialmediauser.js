import mongoose from 'mongoose';

const SocialMediaUserSchema = new mongoose.Schema({
  name: String,
  facebookId: String,
  profilePic: String,
});

export const SocialMediaUser = mongoose.model('SocialMediaUser', SocialMediaUserSchema);