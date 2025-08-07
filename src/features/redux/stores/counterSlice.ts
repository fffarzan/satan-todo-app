import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value = state.value + 1;
    },
    decrement: state => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, actions: PayloadAction<number>) => {
      state.value = state.value + actions.payload;
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;