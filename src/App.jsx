import { useState } from 'react';
import './App.css';
import useKey from './components/Keypress';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }

  useKey('ArrowUp', increment)
  useKey('ArrowDown', decrement)

  return (
    <div className="App" >
      <button onClick={increment} >+</button>
      <span>{count}</span>
      <button onClick={decrement} >-</button>
    </div>
  );
}

export default App;
