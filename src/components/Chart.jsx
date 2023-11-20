import React from 'react';
import {Chart, BarElement,LineElement,ArcElement, CategoryScale,PointElement,LinearScale,Tooltip,Legend} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';


Chart.register(BarElement,CategoryScale,LinearScale,ArcElement,Tooltip,Legend,LineElement,PointElement);
const DynamicChart = ({ chartType, vaccineData }) => {
  var data = {
    labels: vaccineData?.map(x => x.vaccineDate),
    datasets: [{
      label: `Vaccine Coverage In Last 7 days`,
      data: vaccineData?.map(x => x?.dose1),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  }


  return(
    <div className='chart-container'>
    {chartType === 'bar' && <Bar data={data} options={options} />}
    {chartType === 'line' && <Line data={data} options={options} />}
    {chartType === 'pie' && <Pie data={data} options={options} />}
  </div>
  );

};

export default DynamicChart;
