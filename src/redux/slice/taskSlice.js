import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = taskSlice.actions;

export default taskSlice.reducer;
