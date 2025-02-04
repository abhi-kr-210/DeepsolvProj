import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectdb from './db/db.js';
import pageRoutes from './routes/pageroutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin:process.env.CROSS_ORIGIN,
    credentials:true
}))
app.use(express.json());


app.use('/api/pages',pageRoutes);
connectdb()
.then(()=>{
     app.listen(process.env.PORT,
        ()=>{ console.log("server is started successfully")
     })
})
.catch((err)=>{
    console.log("database connection failed",err)
})
