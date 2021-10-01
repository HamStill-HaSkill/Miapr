import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import './App.css';


const Chart = (props) => {

  const chartConfig = {
    type: 'scatter',
    data: {
      datasets: [
        {
          type: 'line',
          borderColor: 'rgb(54, 162, 235)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          data: props.points,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 440,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 1445,
            },
          },
        ],
      },
    }
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }


  const getObjects = (point) => {
      return getRandom(point-10, point+10);
    }

  const updateDataset = () => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = props.points;
      if (chartInstance.data.datasets.length > 1) chartInstance.data.datasets = []
      props.objects.forEach(obj => {
        obj.forEach(points => {
          chartInstance.data.datasets.push({
            type: 'line',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 1,
            pointRadius: 0,
            fill: false,
            lineTension: 0,
            data: points.map(point => ({x: getObjects(point.x), y: getObjects(point.y)})),
          });
        });
      });

      chartInstance.update();
    }
  };

  
  useEffect(() => {
    updateDataset();
  }, [props])

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div className="graph5">
      <canvas onClick={e => {
        props.setMousePos({ y: 840 - e.pageY, x: e.pageX - 45 })
      }} ref={chartContainer} />
    </div>
  );
};

export default Chart;