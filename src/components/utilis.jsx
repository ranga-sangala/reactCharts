export async function getVaccineData() {
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
    
    return updatedData?.last7DaysVaccination

  }


