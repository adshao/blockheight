import React, { useEffect, useState } from "react";
import './App.css';

import Flip from './Flip';
import { Follow } from 'react-twitter-widgets'


function App() {
  const [count, setCount] = useState(709998);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://blockchain.info/q/getblockcount');
      const count = await result.text();
      setCount(count);
    }
    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="App">
      <h1>Block Height of Bitcoin:</h1>
      <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
      }}>
        <div style={{ margin: "1em" }}>
          <Flip value={count} />
        </div>
      </div>
      <div style={{
          position: 'absolute', left: '50%', top: '90%',
          transform: 'translate(-50%, -50%)'
        }}>
        <Follow username="AdamShao" />
      </div>
    </div>
  );
}

export default App;
