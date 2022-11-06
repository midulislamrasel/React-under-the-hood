
import { useState } from 'react';
import './App.css';
import Watch from './components/Watch/Watch';

function App() {
  const [state , setState] = useState(0)
  const add = () => {
      const sum = state + 1;
      setState(sum); 
  }

  return (
    <div className="App">
      <button onClick={add} > Add State</button>
      <Watch state = {state}></Watch>
    </div>
  );
}

export default App;

// Watch
// Minute
// Seconds
// MiniSeconds