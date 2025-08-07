import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = ReturnType<typeof store.dispatch>
export type AppStoreType = typeof store