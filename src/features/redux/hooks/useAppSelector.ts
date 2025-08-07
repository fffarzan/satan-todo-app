import type { RootStateType } from '../stores/store';
import { useSelector } from 'react-redux';

export const useAppSelector = useSelector.withTypes<RootStateType>()