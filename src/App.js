import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import {UserData} from './Data'

function App() {

  const [userGainedData, setUserGainedData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["red", "blue", "yellow", "lightgreen", "lightpink"],
      borderColor: "black",
      borderWidth: 2,
    }],
  })

  const [userLostData, setUserLostData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost",
      data: UserData.map((data) => data.userLost),
      backgroundColor: ["gray"],
      borderColor: "black",
      borderWidth: 2,
    }],
  })

  return (
    <div className="App">
      <div style={{width: "550px", margin: "7px"}}>
        <BarChart chartData={userGainedData}/>
      </div>
      <div style={{width: "550px", margin: "7px"}}>
        <LineChart chartData={userLostData}/>
      </div>
      <div style={{width: "500px", margin: "7px"}}>
        <PieChart chartData={userGainedData}/>
      </div>
    </div>
  );
}

export default App;
