import React, { useState, useMemo } from 'react';
import './App.css';
import Child from './components/child';
import Sechild from './components/sechild';

function App() {

  const [i, setI] = useState(0);

  const memoChild = useMemo(() => {
    return <Child />
  }, [])

  const memoChildwithi = useMemo(() => {
    return <Child />
  }, [i])

  const handleClick = () => {
    setI(i + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>use memo</h2>
        <h2>i: {i}</h2>
        <button onClick={handleClick}>Increament I</button>
        <Child />
        <h2>Memo Child</h2>
        {memoChild}
        <h2>Memo Child with i </h2>
        {memoChildwithi}
        <Sechild  />
      </header>
    </div>
  );
}

export default App;
