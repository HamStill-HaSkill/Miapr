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
                    label: 'Разделяющая функция',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    pointRadius: 0,
                    lineTension: 0,  
                    fill: false,
                    data: [],
                },
            ],
        },
        options: {
            maintainAspectRatio: false,
            elements: {
              line: {
                  tension: 0
              }
           },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
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
        debugger;
        chartInstance.data.datasets = props.data;
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
    <div className="graph">
      <canvas ref={chartContainer}/>
    </div>
  );
};

export default Chart;