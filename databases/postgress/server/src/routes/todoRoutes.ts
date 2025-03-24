import { Router } from "express";
import { pool } from "../db/db";
import { Request, Response } from "express";

const TodoRouter = Router();

//get all the routes 
TodoRouter.get("/", async(req: Request, res: Response)=> {
  try{
    const result = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
    res.json(result.rows);
  }catch(err){
    console.error('Error fetching todos:', err);
    res.status(500).json({err:'Server error'});
  }
});

//get a specific todo 
TodoRouter.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Use parameterized query to prevent SQL injection
    const result = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching todo:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

