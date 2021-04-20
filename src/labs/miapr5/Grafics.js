import React, { useEffect, useRef, useState } from 'react';
import Chartjs from 'chart.js';
import './App.css';


const Chart = (props) => {

    const chartConfig = {
        type: 'scatter',
        data: {
            datasets: [
                {
                    label: 'Класс 1',
                    data: props.pointsFirstClass,
                    backgroundColor: 'rgba(255, 99, 132, 1)',
                },
                {
                    label: 'Класс 2',
                    data: props.pointsSecondClass,
                    backgroundColor: 'rgba(34,139,34)',
                },
                {
                    type: 'line',
                    label: 'Разделяющая функция',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    pointRadius: 0,
                    fill: false,
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
        chartInstance.data.datasets[0].data = props.pointsFirstClass;
        chartInstance.data.datasets[1].data = props.pointsSecondClass;
        chartInstance.data.datasets[2].data = props.points;
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