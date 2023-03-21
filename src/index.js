import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"

const dataInfo = async () =>{
    
   const data = await fetchWeatherData('london')

   const weatherInfo = getWeatherinfo(data)

    console.log(weatherInfo)
}

dataInfo()

