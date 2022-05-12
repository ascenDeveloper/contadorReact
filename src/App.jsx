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
      <div className="card">
        <span>{count}</span>
        <div className="buttons">
          <Button value='+' cb={increment}></Button>
          <Button value='-' cb={decrement}></Button>
        </div>
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
  background: rgb(50,59,66);
  background: linear-gradient(235deg, rgba(50,59,66,1) 0%, rgba(18,19,23,1) 100%);
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #313166;
    width: 50%;
    height: 50%;
    background: rgb(65,216,221);
    background: linear-gradient(150deg, #41d8ddbf 0%, #5583ee8f 100%);
    box-shadow: 0px 0px 15px 4px #333 inset;
    .buttons {
      display: flex;
      justify-content:center;
      margin: 10px;
      padding: 10px;
    }
    span {
      color: #f1f1f1;
      font-size: 13vh;
      font-weight: bold;
    }
  }
`