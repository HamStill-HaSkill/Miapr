import React, { useState, useEffect } from 'react';
import './App.css';
import { getRandomPoints, getPointsForGistogram, getUniformPoints, getGausePoints, getExponentPoints, getGammaPoints, getTrianglePoints, getSimpsonPoints } from './calc';
import Chart from "./Grafics";


const Siamod12 = () => {
  const [points, setPoints] = useState([]);
  const [randPoints, setRandPoints] = useState([]);
  const [a, setA] = useState(2 ** 5 - 2);
  const [R0, setR0] = useState(2 ** 6 - 2);
  const [m, setM] = useState(695133); //695133
  const [mat, setMat] = useState(0);
  const [dis, setDis] = useState(0);
  const [aperiod, setAperiod] = useState(0);
  const [aUni, setAUni] = useState(0);
  const [bUni, setBUni] = useState(0);
  const [mode, setMode] = useState("lemer");

  let checkPoints = (points) => {
    let k = 0;
    for (let i = 0; i < points.length - 1; i += 2) {
      if ((points[i] ** 2 + points[i + 1] ** 2) < 1) k++;
    }
    return 2 * k / points.length;
  }
  useEffect(() => {
    let { points, aperiod } = getRandomPoints(a, m, R0);
    switch (mode) {
      case "uniform":
        points = getUniformPoints(points, aUni, bUni);
        break;
      case "gause":
        points = getGausePoints(points, aUni, bUni);
        break;
      case "exponent":
        points = getExponentPoints(points, aUni);
        break;
      case "gamma":
        points = getGammaPoints(points, bUni, aUni);
        break;
      case "triangle":
        points = getTrianglePoints(points, aUni, bUni);
        break;
      case "simpson":
        points = getSimpsonPoints(points, aUni, bUni);
        break;
    }
    setAperiod(aperiod);
    setRandPoints(points);
    setPoints(getPointsForGistogram(points));
    setMat(points.reduce((partial_sum, a) => partial_sum + a, 0) / points.length);
    let ma = points.reduce((partial_sum, a) => partial_sum + a, 0) / points.length;
    let di = 0;
    points.forEach((num) => {
      di += (num - ma) ** 2;
    })
    setDis((1 / (points.length - 1)) * di);
  }, [a, R0, m, mode, aUni, bUni]);

  return (
    <div className="grid-container5">
      <div className="line1">
        <div class="form-group">
          <button type="button" class="btn btn-success" onClick={() => setMode("lemer")}>Lemer</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("uniform")}>Uniform</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("gause")}>Gause</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("exponent")}>Exponent</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("gamma")}>Gamma</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("triangle")}>Triangle</button>
          <button type="button" class="btn btn-success" onClick={() => setMode("simpson")}>Simpson</button>
          <label>a={a}</label>
          <div className="line1">
            <input type="range" value={a} onChange={(e) => setA(e.target.value)} style={{ width: '500px' }} max={1000000} className="form-control-range" />
            <input value={a} onChange={(e) => setA(e.target.value)} style={{ width: '100px' }} max={1000000} className="form-control-range" />
          </div>
          <label>R0={R0}</label>
          <div className="line1">
            <input type="range" value={R0} onChange={(e) => setR0(e.target.value)} style={{ width: '500px' }} max={1000000} className="form-control-range" />
            <input value={R0} onChange={(e) => setR0(e.target.value)} style={{ width: '100px' }} max={1000000} className="form-control-range" />
          </div>
          <label>m={m}</label>
          <div className="line1">
            <input type="range" value={m} onChange={(e) => setM(e.target.value)} style={{ width: '500px' }} max={1000000} className="form-control-range" />
            <input value={m} onChange={(e) => setM(e.target.value)} style={{ width: '100px' }} max={1000000} className="form-control-range" />
          </div>
          <div className="line1">
            <label>a равномерное / мат ож. / lambda</label>
            <input value={aUni} onChange={(e) => setAUni(e.target.value)} style={{ width: '100px' }} max={1000000} className="form-control-range" />
            <label>b равномерное / СКО / nu</label>
            <input value={bUni} onChange={(e) => setBUni(e.target.value)} style={{ width: '100px' }} max={1000000} className="form-control-range" />
          </div>
          <label>Период: {randPoints.length} | 1/m = {1 / randPoints.length}</label> <br />
          <label>D: {dis} | Мат. ожид. = {mat}<br /> СКО = {dis ** 0.5} Aperiod = {aperiod}</label> <br />
          <label>Проверка: {checkPoints(randPoints)}</label>
        </div>
      </div>
      <div>
        <Chart points={points} m={randPoints.length}></Chart>
      </div>
    </div>
  );
}

export default Siamod12;

