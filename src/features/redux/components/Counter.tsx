import { useAppDispatch, useAppSelector } from '../hooks'
import { decrement, increment } from '../stores/counterSlice'

export function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}