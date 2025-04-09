export interface Todo{
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoActions{
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number)=> void;
  editTodo: (id: number, newText: string) => void;

}