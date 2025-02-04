import mongoose from "mongoose";
import {MONGODB_NAME} from '../constants.js'
import dotenv from 'dotenv';
dotenv.config();

const connectdb=async()=>{
      try{
         const connectioninstance= await mongoose.connect(`${process.env.MOGODB_URI}/${MONGODB_NAME}`)
         console.log("connecting monodb success,connection host",connectioninstance.connection.host);
      }catch(err){
        console.log("connecting monodb failed",err);
      }
}
export default connectdb;