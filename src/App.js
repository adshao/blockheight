import React, { useEffect, useState } from "react";
import './App.css';
import logo from './logo.svg';

import Flip from './Flip';
import { Follow } from 'react-twitter-widgets'
import Moment from 'react-moment';


function App() {
  const [count, setCount] = useState(709998);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://blockchain.info/q/getblockcount');
      const count = await result.text();
      setCount(count);
      setDate(new Date());
    }
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);  

  return (
    <div className="App">
      <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'
      }}>
        <img src={logo} alt="Bitcoin" className="bitcoin-logo"/>
        <h1>The Block Height</h1>
        <div style={{ margin: "1em" }}>
          <Flip value={count} />
        </div>
        <Moment local>{date}</Moment>
      </div>
      <div style={{
          position: 'absolute', left: '50%', top: '90%',
          transform: 'translate(-50%, -50%)'
        }}>
        <Follow username="AdamShao" options={{ showCount: false }} />
      </div>
    </div>
  );
}

export default App;
