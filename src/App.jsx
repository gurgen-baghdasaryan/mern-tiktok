import { useState } from 'react';
import './App.css';
import BarChart from "./components/BarChart"
import {UserData}from './Data'

function App() {
  const [UserData, setUserData] = useState({
    labels:,
    datasets:[]
  })


  return (
    <div className="App">
      
    <BarChart chartData={}/>
    </div>
  );
}

export default App;
