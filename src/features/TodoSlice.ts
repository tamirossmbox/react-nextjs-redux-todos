import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";

export interface Todo {
  id: number;
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
    addTodo: (state) => {
      console.log("state", state);

      state.todos = [...state.todos];
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer