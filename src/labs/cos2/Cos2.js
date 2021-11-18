import React, { useState, useEffect } from 'react';
import './App.css';
import { cosA, sinA, A, fi } from './calc';
import Chart from "./Grafics";


const Cos2 = () => {
  const NArray = [512, 1024, 2048, 4096, 8192];
  const [points, setPoints] = useState([]);

  useEffect(() => {
    let cosApoints = [];
    let sinApoints = []; 
    let Apoints = [];
    for (let j = 1; j < 2; j++) {
      cosApoints.push(cosA(NArray[0], j));
      sinApoints.push(sinA(NArray[0], j));
      Apoints.push(A(cosApoints[j-1], sinApoints[j-1]));
    }
    let resultPoints = [];
    let i = 0;

    Apoints.forEach((point) => {
      resultPoints.push({ x: i++, y: 0 })
      resultPoints.push({ x: i++, y: point })
    })
    debugger
    setPoints(resultPoints)
  }, []);


  return (
      <div>
        <Chart points={points}></Chart>
      </div>
  );
}

export default Cos2;

