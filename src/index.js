import { fetchWeatherData } from "./modules/fetchData"

const dataInfo = async () =>{
    
   const data = await fetchWeatherData()

    console.log(data.forecast)
}

dataInfo()

