import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodosState } from "./TodoSlice";

const initialState = {
  isCheckAll: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    saveToLocalStorage: (state, action: PayloadAction<TodosState>) => {
      localStorage.setItem("todos", JSON.stringify(action.payload));
    },
  },
});

export const { saveToLocalStorage } = filterSlice.actions;

export default filterSlice.reducer;
