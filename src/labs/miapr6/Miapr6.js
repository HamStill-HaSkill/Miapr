import React, { useState, useEffect } from 'react';
import './App.css';
import getGroups from './group';
import Chart from "./Grafics";
import CustomizedTables from "./Table"


const Miapr6 = () => {
  let [n, setN] = useState(4);
  //let [data, setData] = useState([]);
  let [result, setResult] = useState([]);

  let data = [];

  let getW = () => {
    //setData(getRandomData(0,5,n));
    let res = getGroups(n, data, 1);
    console.log(res);
    if (res) {
      setResult(res);
    } else {
      alert("Не удалось построить разделяющую функцию");
    }
  }

  let getRandomData = (min, max, n) => {
    let randData = [];
    for (let j = 0; j < n; j++) {
      let row = [];
      for (let i = 0; i < n; i++) {
        if (i == j) {
          row.push(0);
          continue;
        }
        if (row[i] == undefined) {
            
            if (randData[j, i]) {
              row[i] = randData[i][j];
            } else {
              row[i] = (Math.random() * (max - min) + min).toFixed(1);
              while (row[i] == 0) row[i] = (Math.random() * (max - min) + min).toFixed(1);
            }
        }
      }       
      randData.push(row);
    }
    data = randData;
    return randData;
  }

  useEffect(() => {
  }, [result])

  return (
    <div className="grid-container">
      <div className="line">
        <div>
          <div className="grid-container">
            <h3>Количество объектов группирования</h3>
            <div className="line">
              <input className="form-control" value={n}
                onChange={(e) => setN(e.target.value)} id="form"></input>
                <button className="btn btn-primary" id="btn" onClick={getW}>Run</button>
            </div>
          </div>
          <div className="res-container">
          </div>
        </div>
      </div>
      <div>
        <CustomizedTables n={n} data={getRandomData(0,5,n)}></CustomizedTables>
      </div>
      <div className="chart">
        <Chart data={result}></Chart>
      </div>

    </div>
  );
}

export default Miapr6;