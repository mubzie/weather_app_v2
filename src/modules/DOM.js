import { fetchWeatherData, getWeatherinfo } from "./fetchData";


const createUI = async () => {

    // fetched the weather data from weatherapi and stored the response in a variable
    const weatherInfo = await fetchWeatherData('london')
    const data = getWeatherinfo(weatherInfo)

    console.log(data)

    // creating the application UI by targeting its respective DOM element //
 


}

export { createUI }