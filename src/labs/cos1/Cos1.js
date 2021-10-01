import React, { useState, useEffect } from 'react';
import './App.css';
import {getHarmonicSignalFunction, getPolyharmonicSignalFunction, getPolyharmonicSignalFunctionLine} from './calc';
import Chart from "./Grafics";


const Cos1 = () => {
  const [isHarmonicMode, setIsHarmonicMode] = useState(true);
  const [isHarmonicLineMode, setIsHarmonicLineMode] = useState(false);

  const fi = isHarmonicMode ? [2 * Math.PI, Math.PI / 6, Math.PI / 2, 0, 3 * Math.PI / 4, Math.PI / 4]: [Math.PI / 6, Math.PI / 2, Math.PI / 3, Math.PI / 9, 0, Math.PI / 4];
  const fiPretty = isHarmonicMode ? ["2pi", "pi/6", "pi/2", "0", "3pi/4", "pi/4"] : ["pi/6", "pi/2", "pi/3", "pi/9", "0", "pi/4"];
  const NArray = [512, 1024, 2048, 4096, 8192];
  const FArray = [2, 4, 3, 7, 5];
  const AArray = [2, 2, 8, 3, 1];
  

  const [points, setPoints] = useState([]);
  const [A, setA] = useState(6);
  const [F, setF] = useState(3);
  const [Fi, setFi] = useState(0);
  const [N, setN] = useState(0);


  useEffect(() => {
    let points = isHarmonicMode ? getHarmonicSignalFunction(A, F, fi[Fi], NArray[N]) : (isHarmonicLineMode ? getPolyharmonicSignalFunctionLine(NArray) : getPolyharmonicSignalFunction(A, fi, NArray[N]));
    let resultPoints = [];
    let i = 0;

    points.forEach((point) => {
      resultPoints.push({ x: i++, y: point })
    })

    setPoints(resultPoints)
  }, [A, F, Fi, N, isHarmonicMode, isHarmonicLineMode]);

  let Ahandler = (num) => {
    setA(6);
    setF(3);
    setFi(num);
    setN(num);
  }

  let Bhandler = (num) => {
    setA(8);
    setF(FArray[num]);
    setFi(5);
    setN(num);
  }

  let Chandler = (num) => {
    setA(AArray[num]);
    setF(5);
    setFi(5);
    setN(num);
  }

  let Ghandler = (num) => {
    setA(6);
    setF(num + 1);
    setFi(num);
    setN(num);
  }

  return (
    <div className="grid-container5">
      <div className="line1">
        {isHarmonicMode && <div className="left">
          <div>
            <button type="button" class="btn btn-success" onClick={() => Ahandler(0)}>1</button>
            <button type="button" class="btn btn-success" onClick={() => Ahandler(1)}>2</button>
            <button type="button" class="btn btn-success" onClick={() => Ahandler(2)}>3</button>
            <button type="button" class="btn btn-success" onClick={() => Ahandler(3)}>4</button>
            <button type="button" class="btn btn-success" onClick={() => Ahandler(4)}>5</button>
          </div>
          <div>
            <button type="button" class="btn btn-success" onClick={() => Bhandler(0)}>1</button>
            <button type="button" class="btn btn-success" onClick={() => Bhandler(1)}>2</button>
            <button type="button" class="btn btn-success" onClick={() => Bhandler(2)}>3</button>
            <button type="button" class="btn btn-success" onClick={() => Bhandler(3)}>4</button>
            <button type="button" class="btn btn-success" onClick={() => Bhandler(4)}>5</button>
          </div>
          <div>
            <button type="button" class="btn btn-success" onClick={() => Chandler(0)}>1</button>
            <button type="button" class="btn btn-success" onClick={() => Chandler(1)}>2</button>
            <button type="button" class="btn btn-success" onClick={() => Chandler(2)}>3</button>
            <button type="button" class="btn btn-success" onClick={() => Chandler(3)}>4</button>
            <button type="button" class="btn btn-success" onClick={() => Chandler(4)}>5</button>
          </div>
        </div>}
        {!isHarmonicMode && <div className="left">
          <div>
            <button type="button" class="btn btn-warning" onClick={() => Ghandler(0)}>1</button>
            <button type="button" class="btn btn-warning" onClick={() => Ghandler(1)}>2</button>
            <button type="button" class="btn btn-warning" onClick={() => Ghandler(2)}>3</button>
            <button type="button" class="btn btn-warning" onClick={() => Ghandler(3)}>4</button>
            <button type="button" class="btn btn-warning" onClick={() => Ghandler(4)}>5</button>
          </div>
        </div>}
        <div class="form-group">
          <label>Амплитуда A = {A}</label>
          <input type="range" value={A} onChange={(e) => setA(e.target.value)} min={1} max={15} style={{ width: '500px' }} className="form-control-range" />
          <label>Частота f = {F}</label>
          <input type="range" value={F} onChange={(e) => setF(e.target.value)} min={1} max={15} style={{ width: '500px' }} className="form-control-range" />
          <label>Начальная фаза  fi = {fiPretty[Fi]}</label>
          <input type="range" value={Fi} onChange={(e) => setFi(e.target.value)} min={0} max={5} style={{ width: '500px' }} className="form-control-range" />
          <label>N = {NArray[N]}</label>
          <input type="range" value={N} onChange={(e) => setN(e.target.value)} min={0} max={4} style={{ width: '500px' }} className="form-control-range" />
        </div>
        <div className="right">
            <button type="button" class="btn btn-secondary" onClick={() => setIsHarmonicMode(true)}>Гармонический</button>
            <button type="button" class="btn btn-secondary" onClick={() => setIsHarmonicMode(false)}>Полигармонический</button>
            <button type="button" class="btn btn-secondary" onClick={() => setIsHarmonicLineMode(!isHarmonicLineMode)}>Полигармонический Л</button>
        </div>
      </div>
      <div>
        <Chart points={points} N={NArray[N]}></Chart>
      </div>
    </div>
  );
}

export default Cos1;

