 import express from 'express';
 import { userRoutes } from './src/api/v1/routes/user-routes.js';
import { error404 } from './src/utils/middlewares/404.js';
import dotenv from 'dotenv';
import { connectDB } from './src/utils/db/connection.js';
import cors from 'cors';
const app = express();
app.use(cors(
    
));
dotenv.config();

app.use(express.json());

app.use('/',userRoutes);
app.use(error404);
const promise = connectDB();
promise.then(result=>{
    app.listen(3000,err=>{
    if(err) console.log(err);
    else console.log('Server is running on port 3000');
})
    console.log('DB connected');
}).catch(err=>{
    console.log('DB connection error',err);
})
