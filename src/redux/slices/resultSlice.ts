import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  doorsHeigth: number;
  doorsWidth: number;
  windowsHeight: number;
  windowsWidth: number;
  canOfPaintXLarge: number;
  canOfPaintLarge: number;
  canOfPaintMedium: number;
  canOfPaintSmall: number;
  coveragePerLitter: number;
  totalWallsArea: number;
  totalLittersXLarge: number;
  totalLittersLarge: number;
  totalLittersMedium: number;
  totalLittersSmall: number;
  color: string;
};

const initialState: InitialState = {
  doorsHeigth: 1.9,
  doorsWidth: 0.8,
  windowsHeight: 2,
  windowsWidth: 1.2,
  canOfPaintXLarge: 18,
  canOfPaintLarge: 3.6,
  canOfPaintMedium: 2.5,
  canOfPaintSmall: 0.5,
  coveragePerLitter: 5,
  totalWallsArea: 0,
  totalLittersXLarge: 0,
  totalLittersLarge: 0,
  totalLittersMedium: 0,
  totalLittersSmall: 0,
  color: '',
};

export const slice = createSlice({
  name: 'Result',
  initialState,
  reducers: {
    setTotalWallsArea(state: any, { payload }: PayloadAction<number>) {
      return { ...state, totalWallsArea: payload };
    },
    setTotalLitters(state: any, { payload }: PayloadAction<number>) {
      return { ...state, totalLitters: payload };
    },
    setColor(state: any, { payload }: PayloadAction<string>) {
      return { ...state, color: payload };
    },
  },
});

export const { setTotalWallsArea, setTotalLitters, setColor } = slice.actions;

export const selectDoorsHeight = (state: { doorsHeigth: unknown }) =>
  state.doorsHeigth;
export const selectDoorsWidth = (state: { doorsWidth: unknown }) =>
  state.doorsWidth;
export const selectWindowsHeight = (state: { windowsHeight: unknown }) =>
  state.windowsHeight;
export const selectWindowsWidth = (state: { windowsWidth: unknown }) =>
  state.windowsWidth;

export const selectCanOfPaintExLarge = (state: { canOfPaintXLarge: unknown }) =>
  state.canOfPaintXLarge;
export const selectCanOfPaintLarge = (state: { canOfPaintLarge: unknown }) =>
  state.canOfPaintLarge;
export const selectCanOfPaintMedium = (state: { canOfPaintMedium: unknown }) =>
  state.canOfPaintMedium;
export const selectCanOfPaintSmall = (state: { canOfPaintSmall: unknown }) =>
  state.canOfPaintSmall;
export const selectCoveragePerLitter = (state: {
  coveragePerLitter: unknown;
}) => state.coveragePerLitter;

export default slice.reducer;
