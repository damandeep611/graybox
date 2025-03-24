import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeDatabase } from './db/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middleware 
app.use(cors());
app.use(express.json());

//init db 
initializeDatabase();

//route 
app.post("/api", async(req: Request, res: Response)=> {
  console.log('route init also ')
})

//run it 
app.listen(PORT, ()=> {
  console.log(`server running on port ${PORT}`)
});