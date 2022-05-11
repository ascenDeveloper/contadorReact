import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import useKey from './components/Keypress';
import styled from 'styled-components';

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
    <Container>
      <span>{count}</span>
      <div className="buttons">
        <Button value='+' cb={increment}></Button>
        <Button value='-' cb={decrement}></Button>
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  .buttons {
    display: flex;
    justify-content:center;
    margin: 10px;
    padding: 10px;
    
  }
`