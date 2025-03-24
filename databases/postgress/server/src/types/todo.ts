export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  created_at: Date;
}

export interface CreateTodoDTO {
  title: string;
  description?:string;
}

export interface UpdateTodoDTO {
  title?: string;
  description?: string;
  completed?:boolean;
}