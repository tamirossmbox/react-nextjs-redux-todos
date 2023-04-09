import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosState } from "./TodoSlice";

const initialState = {
  isMarkAllAsDone: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    saveToLocalStorage: (state, action: PayloadAction<TodosState>) => {
      localStorage.setItem("todos", JSON.stringify(action.payload));
    },
    
    changeIsMarkAll: (state, action) => {
        state.isMarkAllAsDone = action.payload
    }
  },
});

export const { saveToLocalStorage, changeIsMarkAll } = filterSlice.actions;

export default filterSlice.reducer;
