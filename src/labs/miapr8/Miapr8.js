import React, { useState, useEffect } from 'react';
import './App.css';
import { potential, getPointClass } from './calc';
//import draw from './grafic';
import Chart from "./Grafics";


const Miapr8 = () => {
  let [points, setPoints] = useState([]);
  let [mousePos, setMousePos] = useState();
  let [objects, setObjects] = useState([]);
  let [newObjects, setNewObjects] = useState([]);

  useEffect(() => {
    let tempPoints = [...points];
    tempPoints.push(mousePos);
    setPoints(tempPoints);
    console.log(mousePos);
  }, [mousePos]);

  let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }


  const getObjects = (point) => {
      //return getRandom(point-20, point+20);
      return point;
    }

  let addObject = () => {
    let oldObjects = [...objects];
    oldObjects.push(points);
    let newObj = [];
    oldObjects.forEach(obj => {
      newObj.push([]);
      obj.forEach(point => {
        if (point) newObj[newObj.length-1].push({x: getObjects(point.x), y: getObjects(point.y)});
      })
    })
    let tempObj = [...newObjects];
    tempObj.push(newObj)
    setNewObjects(tempObj);
    setPoints([]);
  }

  let generateObj = () => {
    setObjects(newObjects);
    setPoints([]);

  }

  let clear = () => {
    setPoints([]);
    setObjects([]);
  }

  return (
    <div className="grid-container5">
        <div>
          <div style={{position:"absolute", top:200, left: 650 }}>
        <button className="btn btn-danger" onClick={clear}>Clear</button>
        <button className="btn btn-success" onClick={addObject}>Add</button>
        <button className="btn btn-info" onClick={generateObj}>Generate</button>
        </div>
          <Chart points={points} setMousePos={setMousePos} objects={objects}></Chart>
        </div>

      </div>
  );
}

export default Miapr8;

