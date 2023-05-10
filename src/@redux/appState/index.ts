import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    isModalVisible: false,
    isErrorOccurred: {
      state: false,
      message: '',
    },
  },
  reducers: {
    setModalState: (state, action) => {
      state.isModalVisible = action.payload;
    },
    setError: (state, action) => {
      state.isErrorOccurred = {
        state: true,
        message: action.payload || '',
      };
    },
  },
});

export const { setModalState, setError } = appStateSlice.actions;

export default appStateSlice.reducer;
