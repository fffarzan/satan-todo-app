import { configureStore, type Action, type ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type AppStoreType = typeof store
export type RootStateType = ReturnType<AppStoreType['getState']>
export type AppDispatchType = AppStoreType['dispatch']

export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootStateType,
  unknown,
  Action
>
