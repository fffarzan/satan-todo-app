import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppThunk, RootStateType } from './store';
import { fetchCount } from '../api/counterApi';

export interface CounterState {
  value: number,
  status: 'idle' | 'loading' | 'failed',
}

const initialState: CounterState = {
  value: 0,
  status: 'idle'
}

export const selectCount = (state: RootStateType) => state.counter.value;
export const selectStatus = (state: RootStateType) => state.counter.status;

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
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed'
      })
  }
})

export const incrementIfOdd = (amount: number): AppThunk => {
  return (dispatch, getState) => {
    const currentValue = selectCount(getState())

    if (currentValue % 2 === 0) {
      return
    }

    dispatch(incrementByAmount(amount))
  }
}

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const res = await fetchCount(amount);

  return res.data;
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;