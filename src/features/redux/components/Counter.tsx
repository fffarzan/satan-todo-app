import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { decrement, increment, incrementIfOdd, incrementAsync, selectCount, selectStatus } from '../stores/counterSlice'

export function Counter() {
  const count = useAppSelector(selectCount)
  const status = useAppSelector(selectStatus)
  const [incrementAmount, setIncrementAmount] = useState('2')
  const dispatch = useAppDispatch()

  function setAmountIncrement (value: string) {
    if (!Number(value)) {
      return;
    }
    
    setIncrementAmount(value)
  }

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
      <input
        value={incrementAmount}
        type="number"
        onChange={e => setAmountIncrement(e.target.value)}
      />
      <button disabled={status !== 'idle'} onClick={() => dispatch(incrementAsync(+incrementAmount))}>Add Async</button>
      <button onClick={() => dispatch(incrementIfOdd(+incrementAmount))}>Add If Odd</button>
    </div>
  )
}