import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  useEffect(() => {
    const onESC = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keyup", onESC, false);
    return () => {
      window.addEventListener("keyup", onESC, false);
    };
  }, []);

  return (
    <div className="App" onKeyPress={(e) => handler(e)}>fd
      <button onClick={increment} >+</button>
      <span>{count}</span>
      <button onClick={decrement} >-</button>



    </div>
  );
}

export default App;
