import React, { useState, useEffect } from 'react';
import './App.css';
import { potential, getPointClass} from './potential';
//import draw from './grafic';
import Chart from "./Grafics";


const Miapr5 = () => {
  let [x11, setX11] = useState(-1);
  let [x12, setX12] = useState(1);
  let [x21, setX21] = useState(2);
  let [x22, setX22] = useState(1);
  let [y11, setY11] = useState(0);
  let [y12, setY12] = useState(1);
  let [y21, setY21] = useState(0);
  let [y22, setY22] = useState(-2);
  let [testX, setTestX] = useState(1);
  let [testY, setTestY] = useState(2);
  let [pointsFirstClass, setPointsFirstClass] = useState([]);
  let [pointsSecondClass, setPointsSecondClass] = useState([]);
  let [result, setResult] = useState([]);
  let [inputData, setInputData] = useState("");
  let [resFunction, setResFunction] = useState("");

  let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let getW = () => {
    //setResult(perceptron(classNum, objNum, paramNum));
    let res = potential([{x: x11, y: y11}, {x: x12, y: y12}, {x: x21, y: y21}, {x: x22, y: y22}]);
    if (res) {
      setPointsFirstClass([{x: x11, y: y11}, {x: x12, y: y12}]);
      setPointsSecondClass([{x: x21, y: y21}, {x: x22, y: y22}]);
      setResult(res);
    } else {
      alert("Не удалось построить разделяющую функцию");
    }
  }
  let addPoint = () => {
    if (getPointClass(+testX, +testY) >= 0) {
      let arr = pointsFirstClass;
      arr.push({x: +testX, y: +testY})
      setPointsFirstClass(arr);
    } else {
      let arr = pointsSecondClass;
      arr.push({x: +testX, y: +testY})
      setPointsSecondClass(arr);
    }
    setTestX(0);
    setTestY(0);
  }
  let addRandomPoints = () => {
    for (let i = 0; i < 200; i++) {
      let x = getRandom(-10, 10) + Math.random();
      let y = getRandom(-10, 10) + Math.random();
      if (getPointClass(x, y) >= 0) {
        let arr = pointsFirstClass;
        arr.push({x, y})
        setPointsFirstClass(arr);
      } else {
        let arr = pointsSecondClass;
        arr.push({x, y})
        setPointsSecondClass(arr);
      }
      setTestX(x);
      setTestY(y);
    }
  }
  let addAllPoints = () => {
    for (let i = 0; i < 50000; i++) {
      let x = getRandom(-10, 10) + Math.random();
      let y = getRandom(-10, 10) + Math.random();
      if (getPointClass(x, y) >= 0) {
        let arr = pointsFirstClass;
        arr.push({x, y})
        setPointsFirstClass(arr);
      } else {
        let arr = pointsSecondClass;
        arr.push({x, y})
        setPointsSecondClass(arr);
      }
      setTestX(x);
      setTestY(y);
    }
  }

  useEffect(() => {
  }, [result])


  return (
    <div className="grid-container5">
      <div className="line5">
        <div>
          <div className="grid-container5">
            <h3>Класс 1</h3>
            <div className="line5">
              <input className="form-control" value={x11}
                onChange={(e) => setX11(e.target.value)} id="form5"></input>
              <input className="form-control" value={y11}
                onChange={(e) => setY11(e.target.value)} id="form5"></input>
              <input className="form-control" value={x12}
                onChange={(e) => setX12(e.target.value)} id="form5"></input>
              <input className="form-control" value={y12}
                onChange={(e) => setY12(e.target.value)} id="form5"></input>
            </div>
            <h3>Класс 2</h3>
            <div className="line5">
              <input className="form-control" value={x21}
                onChange={(e) => setX21(e.target.value)} id="form5"></input>
              <input className="form-control" value={y21}
                onChange={(e) => setY21(e.target.value)} id="form5"></input>
              <input className="form-control" value={x22}
                onChange={(e) => setX22(e.target.value)} id="form5"></input>
              <input className="form-control" value={y22}
                onChange={(e) => setY22(e.target.value)} id="form5"></input>
            </div>
            <button className="btn btn-primary" id="btn5" onClick={getW}>Run</button>
          </div>
          <div className="res-container5">
          </div>
        </div>
        <div className="grid-container5">
          <h3>Тестовые данные</h3>
          <div className="line">
            <input className="form-control" value={testX}
              onChange={(e) => setTestX(e.target.value)} id="form5"></input>
            <input className="form-control" value={testY}
              onChange={(e) => setTestY(e.target.value)} id="form5"></input>
          </div>
          <button className="btn btn-primary" id="btn5" onClick={addPoint}>Add</button>
          <button className="btn btn-primary" id="btn5" onClick={addRandomPoints}>Rand</button>
          <button className="btn btn-primary" id="btn5" onClick={addAllPoints}>All</button>
        </div>
      </div>
      <h4>d(x)={result.formula ? (result.formula[0] + (result.formula[1] < 0 ? result.formula[1]: "+" + result.formula[1]) + "x1" 
                                                    + (result.formula[2] < 0 ? result.formula[2]: "+" + result.formula[2]) + "x2"
                                                    + (result.formula[3] < 0 ? result.formula[3]: "+" + result.formula[3]) + "x1x2"): ""}</h4>
      <div>
        {/* <Grafic pointsFirstClass={pointsFirstClass} pointsSecondClass={pointsSecondClass} points={result.points} ></Grafic> */}
        <Chart pointsFirstClass={pointsFirstClass} pointsSecondClass={pointsSecondClass} points={result.points}></Chart>

      </div>

    </div>
  );
}

export default Miapr5;

