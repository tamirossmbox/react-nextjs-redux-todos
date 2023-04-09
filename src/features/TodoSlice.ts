import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number | string;
  text: string;
  isDone?: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [
    { id: 1, text: "Buy some food for the Meeting", isDone: false },
    { id: 2, text: "Prepare of next meeting", isDone: false },
    { id: 3, text: "Refactore my code", isDone: true },
  ],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload) return;

      const newTodo = { id: Date.now(), text: action.payload, isDone: false };
      state.todos.push(newTodo);
    },

    clearAll: (state) => {
      state.todos = [];
    },

    deleteTodo: (state, action) => {
      if (!action.payload) return;

      const newTodos = state.todos.filter((item) => item.id !== action.payload);
      state.todos = newTodos;
    },

    changeIsDone: (state, action) => {
      const { id, isDone } = action.payload;

      const todo = state.todos.find((item) => item.id === id);

      if (todo) todo.isDone = !isDone;
    },

    checkAll: (state) => {
      state.todos.forEach((todo) => (todo.isDone = true));
    },
  },
});

export const { addTodo, clearAll, deleteTodo, changeIsDone, checkAll } =
  todosSlice.actions;

export default todosSlice.reducer;
//  markAsDone
//  markAllAsDone