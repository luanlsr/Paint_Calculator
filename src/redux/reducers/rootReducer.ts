import { combineReducers } from '@reduxjs/toolkit';
import wallOneSlice from '../slices/wallOneSlice';
import wallTwoSlice from '../slices/wallTwoSlice';
import wallThreeSlice from '../slices/wallThreeSlice';
import wallFourSlice from '../slices/wallFourSlice';
import resultSlice from '../slices/resultSlice';

export const rootReducer = combineReducers({
  wallOneSlice,
  wallTwoSlice,
  wallThreeSlice,
  wallFourSlice,
  resultSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
