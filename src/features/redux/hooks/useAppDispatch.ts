import { useDispatch } from 'react-redux';
import type { AppDispatchType } from '../stores/store';

export const useAppDispatch = useDispatch.withTypes<AppDispatchType>()