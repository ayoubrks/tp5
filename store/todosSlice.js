// store/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => { state.push(action.payload); },
    removeTodo: (state, action) => state.filter(t => t.id !== action.payload),
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;