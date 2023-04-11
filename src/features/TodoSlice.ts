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

    updateTodos: (state, action) => {
      state.todos = action.payload.todos
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

    markAllAsDone: (state, action) => {
      state.todos.forEach((todo) => {
        todo.isDone = action.payload;
      });
    },

    sortTodos: (state, action) => {
      switch (action.payload) {
        case "asc":
          state.todos = state.todos.sort((a, b) => {
            return a.text > b.text ? 1 : -1;
          });
          break;

        case "dsc":
          state.todos = state.todos.sort((a, b) => {
            return a.text < b.text ? 1 : -1;
          });
          break;
      }
    },
  },
});

export const {
  addTodo,
  clearAll,
  deleteTodo,
  changeIsDone,
  markAllAsDone,
  sortTodos,
  updateTodos,
} = todosSlice.actions;

export default todosSlice.reducer;
//  markAsDone
//  markAllAsDone
