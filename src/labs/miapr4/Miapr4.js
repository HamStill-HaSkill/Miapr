import React, { useState, useEffect } from 'react';
import './App.css';
import perceptron from './perceptron';

const Miapr4 = () => {
  let [classNum, setclassNum] = useState(3);
  let [objNum, setobjNum] = useState(2);
  let [paramNum, setparamNum] = useState(3);
  let [result, setResult] = useState([]);
  let [inputData, setInputData] = useState("");
  let [resFunctions, setResFunctions] = useState("");

  let getW = () => {
    setResult(perceptron(classNum, objNum, paramNum));
  }

  useEffect(() => {
    let count = 0;
    if (result) {
      setInputData(result.objs ? result.objs.map((objType) => {
        return (
          <div>
            <h5>Класс {++count} {objType.map(num => "{" + num + "} ")}</h5>
          </div>
        )
      }) : "");
      count = 0;
      setResFunctions(result.weights ? result.weights.map((objType) => {
        return (
          <div>
            <h5> d{++count}(x)= {objType.map((num, index) => (index == 0 ? num : num > 0 ? "+" + num : "" + num) + "x" + (index + 1))}</h5>
          </div>
        )
      }) : "");
    }
  }, [result])


  return (
    <div>
      <div className="grid-container">
        <h3>Введите число классов</h3>
        <input className="form-control" value={classNum} onChange={(e) => setclassNum(Number.isInteger(+e.target.value) ? e.target.value : "")} id="form4"></input>
        <h3>Введите число объектов</h3>
        <input className="form-control" value={objNum} onChange={(e) => setobjNum(Number.isInteger(+e.target.value) ? e.target.value : "")} id="form4"></input>
        <h3>Введите число параметров</h3>
        <input className="form-control" value={paramNum} onChange={(e) => setparamNum(Number.isInteger(+e.target.value) ? e.target.value : "")} id="form4"></input>
        <button className="btn btn-primary" id="btn4" onClick={getW}>Обучение</button>
      </div>
      <div className="res-container">
        {inputData}
        {resFunctions}
      </div>
    </div>
  );
}

export default Miapr4;
