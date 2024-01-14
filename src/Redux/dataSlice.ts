import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  data: string | null;
}

const initialState: DataState = {
  data: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<string>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
