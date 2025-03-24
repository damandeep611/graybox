import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL, ssl: {
    rejectUnauthorized: false,
  }
})

//initializing database 

export const initializeDatabase = async ()=> {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY, 
        title VARCHAR(255) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      )
      `)
      console.log('tech neon pg connected')
  }catch(err){
    console.error('Error initializing database:', err);
    
  }
}