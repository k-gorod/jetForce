import { createSlice } from '@reduxjs/toolkit';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    isModalVisible: false,
    modalContentId: 0,
    isErrorOccurred: {
      state: false,
      message: '',
    },
  },
  reducers: {
    setModalContent: (state, action) => {
      state.modalContentId = action.payload;
    },
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

export const { setModalState, setError, setModalContent } = appStateSlice.actions;

export default appStateSlice.reducer;
