import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  height: number;
  width: number;
  doors: number;
  windows: number;
};

const initialState: InitialState = {
  height: 0,
  width: 0,
  doors: 0,
  windows: 0,
};

export const slice = createSlice({
  name: 'wallOne',
  initialState,
  reducers: {
    setWallOneHeight(state: any, { payload }: PayloadAction<number>) {
      return { ...state, height: payload };
    },
    setWallOneWidth(state: any, { payload }: PayloadAction<number>) {
      return { ...state, width: payload };
    },
    setWallOneDoors(state: any, { payload }: PayloadAction<number>) {
      return { ...state, doors: payload };
    },
    setWallOneWindows(state: any, { payload }: PayloadAction<number>) {
      return { ...state, windows: payload };
    },
  },
});

export const {
  setWallOneHeight,
  setWallOneWidth,
  setWallOneDoors,
  setWallOneWindows,
} = slice.actions;

export const selectHeight = (state: { height: unknown }) => state.height;
export const selectWidth = (state: { width: unknown }) => state.width;
export const selectDoors = (state: { doors: unknown }) => state.doors;
export const selectWindows = (state: { windows: unknown }) => state.windows;

export default slice.reducer;
