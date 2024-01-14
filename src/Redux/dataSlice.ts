import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  data: number | null;
  kids: number[] | null;
}

const initialState: DataState = {
  data: null,
  kids: null,
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<number>) => {
      state.data = action.payload;
    },
    setKids: (state, action: PayloadAction<number[]>) => {            
      state.kids = action.payload;
    },
  },
});

export const { setData, setKids } = dataSlice.actions;
