import { createSlice } from '@reduxjs/toolkit';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    isLoading: false,
    itemList: [],
  },
  reducers: {
    getItemList: (state) => {
      console.log('getItemList');
      state.isLoading = true;
    },
    setItemList: (state, action) => {
      console.log('action.payload', action.payload);
      state.itemList = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getItemList, setItemList } = contentSlice.actions;

export default contentSlice.reducer;
