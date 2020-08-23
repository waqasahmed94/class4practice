import React, { useState } from 'react';
import './App.css';

function App() {
  let [count, setcount] = useState(0);
  let [ismorning, setmorning] = useState(true);
  return (

    <div className={`app ${ismorning ? 'app2' : ''}`}>
      <h1>Counter Value is:-{count}</h1>

      <button onClick={() => setcount(++count)}>Increment</button>

      <hr />
      <h1>Muhammad Waqas Ahmed</h1>
        <h1>Assignment # 4 BootCamp 2020</h1>
      <hr />

      <h1>Good {ismorning ? 'Morning' : 'Night'}</h1>

      <button onClick={() => setmorning(!ismorning)}>Change Status</button>
    </div>

  );
}

export default App;
