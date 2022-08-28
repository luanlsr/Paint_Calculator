import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from './reducers/rootReducer';
import { AppDispatch } from './store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>;
