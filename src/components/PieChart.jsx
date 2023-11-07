import React from 'react'
import {Chart,ArcElement,Tooltip,Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

Chart.register(ArcElement,Tooltip,Legend);


const PieChart = ({vaccinationByGenderDetails}) => {
    console.log(vaccinationByGenderDetails[0])
    var data = {
        labels: vaccinationByGenderDetails?.map(x => x.gender),
        datasets: [{
          label: vaccinationByGenderDetails?.length ,
          data: vaccinationByGenderDetails?.map(x => x.count),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
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
            fontSize: 25,
          },
          tooltip: {
            enabled: true
          }
        },
      }
  
    return (
      <div>
   <Pie data={data}
   height={800}
   options={options} />
   </div>
  )
}

export default PieChart
