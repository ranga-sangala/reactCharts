import React from 'react'
import {Chart, BarElement, CategoryScale, LinearScale} from 'chart.js'
import {Bar} from 'react-chartjs-2'

Chart.register(BarElement,CategoryScale,LinearScale)

const BarChart = ({data}) => {
      console.log(data)
  var data = {
    labels: data?.map(x => x.vaccineDate),
    datasets: [{
      label: `Vaccine Coverage In Last 7 days`,
      data: data?.map(x => x?.dose1),
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

  return (
    <div>
     <Bar data={data} height ={400} width={400} options={options}/>
    </div>
  )
}

export default BarChart
