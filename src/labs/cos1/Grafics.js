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
          borderWidth: 5,
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
              min: -30,
              max: 30,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              min: 0,
              max: 8192,
            },
          },
        ],
      },
    }
  };

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  

  const updateDataset = () => {
      if (chartInstance) {
        chartInstance.data.datasets[0].data = props.points;
        // chartInstance.options.scales.xAxes[0].ticks.max = props.N;
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
      <canvas ref={chartContainer}/>
    </div>
  );
};

export default Chart;