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
  name: 'wallFour',
  initialState,
  reducers: {
    setWallFourHeight(state: any, { payload }: PayloadAction<number>) {
      return { ...state, height: payload };
    },
    setWallFourWidth(state: any, { payload }: PayloadAction<number>) {
      return { ...state, width: payload };
    },
    setWallFourDoors(state: any, { payload }: PayloadAction<number>) {
      return { ...state, doors: payload };
    },
    setWallFourWindows(state: any, { payload }: PayloadAction<number>) {
      return { ...state, windows: payload };
    },
  },
});

export const {
  setWallFourHeight,
  setWallFourWidth,
  setWallFourDoors,
  setWallFourWindows,
} = slice.actions;

export const selectHeight = (state: { height: unknown }) => state.height;
export const selectWidth = (state: { width: unknown }) => state.width;
export const selectDoors = (state: { doors: unknown }) => state.doors;
export const selectWindows = (state: { windows: unknown }) => state.windows;

export default slice.reducer;
