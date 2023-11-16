import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';


function App() {
  const [vaccineData, setVaccineData] = useState([]);
  const [chartType, setChartType] = useState('bar'); 

  useEffect(() => {
       getVaccineData(); 
  },[]);
  async function getVaccineData() {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data');
    const fetchedData = await response.json();
    const updatedData = {
      last7DaysVaccination: fetchedData?.last_7_days_vaccination.map(
        eachDayData => ({
          vaccineDate: eachDayData?.vaccine_date,
          dose1: eachDayData?.dose_1,
          dose2: eachDayData?.dose_2,
        }),
      ),
      vaccinationByAge: fetchedData?.vaccination_by_age.map(range => ({
        age: range.age,
        count: range.count,
      })),
      vaccinationByGender: fetchedData?.vaccination_by_gender.map(
        genderType => ({
          gender: genderType.gender,
          count: genderType.count,
        }),
      ),
    }
    
    setVaccineData(updatedData?.last7DaysVaccination)

  }

  const handleChartTypeChange = (selectedChartType) => {
    setChartType(selectedChartType);
  };
   
  return (
    <>
      <div>
        <label>Select Chart Type:</label>
        <select onChange={(e) => handleChartTypeChange(e.target.value)} value={chartType}>
          <option value="bar">Bar Chart</option>
          <option value="line">Line Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      <div>
        <Chart chartType={chartType} data={vaccineData} />
      </div>
    </>
  );
}

export default App;
