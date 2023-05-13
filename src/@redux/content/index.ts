/* eslint-disable no-restricted-imports */
import { createSlice } from '@reduxjs/toolkit';

// import { array } from '../../components/Card/fakeData';

export const contentSlice = createSlice({
  name: 'content',
  initialState: {
    isLoading: false,
    searchQuery: '',
    itemList: [],
    itemsCount: 0,
    currentPage: 1,
    // itemList: array.results,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    getItemList: (state) => {
      state.isLoading = true;
    },
    setItemList: (state, action) => {
      state.itemList = action.payload;
      state.isLoading = false;
    },
    setSearchResultsCount: (state, action) => {
      state.itemsCount = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  getItemList, setItemList, setSearchQuery, setSearchResultsCount, setCurrentPage,
} = contentSlice.actions;

export default contentSlice.reducer;
