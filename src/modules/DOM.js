import { fetchWeatherData, getWeatherinfo } from "./fetchData";
import format from "date-fns/format";


const createUI = async (city) => {
    
    // fetched the weather data from weatherapi and stored the response in a variable
    const weatherInfo = await fetchWeatherData(city)
    const data = getWeatherinfo(weatherInfo)

    console.log(data)

    // creating the application UI by targeting its respective DOM element //

    const date = document.querySelector('.date')
    date.textContent = format(new Date(`${data.location.time}`), 'eeee do MMM, yyyy - hh:mm aaa')

    const condition = document.querySelector('.condition')
    condition.textContent = `${data.current.condition}`

    const icon = document.getElementById('icon')
    const weatherIcon = document.createElement('img')
    weatherIcon.classList.add('img')
    weatherIcon.src = `${data.current.icon}`
    icon.appendChild(weatherIcon)

    const region = document.querySelector('.region')
    region.textContent = `${data.location.name}, ${data.location.country}`

    const temp = document.querySelector('.temp')
    temp.textContent = `${Math.round(Math.trunc(data.current.temp))}°C`

    const humidity = document.querySelector('.humidity')
    humidity.textContent = `humidity: ${data.current.humidity}%`

    const feelslike = document.querySelector('.feelslike')
    feelslike.textContent = `feelslike: ${data.current.feelslike}°C`

    const windSpeed = document.querySelector('.windspeed')
    windSpeed.textContent = `windSpeed: ${data.current.windSpeed}km/h`

    const heading = document.querySelector('.header_forecast_child')
    heading.textContent = `Weather Forecast for the next 3 days in ${data.location.name}`

    //weather forecast for day1
    const day1 = document.querySelector('.h_one')
    day1.textContent = format(new Date(`${data.forecast.day1_date}`), 'EEEE')

    const icon1 = document.querySelector('.i_one')
    const weatherIcon1 = document.createElement('img')
    weatherIcon1.classList.add('imgs')
    weatherIcon1.src = `${data.forecast.day1_icon}`
    icon1.appendChild(weatherIcon1)

    const con1 = document.querySelector('.c_one')
    con1.textContent = `${data.forecast.day1_text}`

    const temp1 = document.querySelector('.t_one')
    temp1.textContent = `${data.forecast.day1_temp}°C`
    
    //weather forecast for day2
    const day2 = document.querySelector('.h_two')
    day2.textContent = format(new Date(`${data.forecast.day2_date}`), 'EEEE')

    const icon2 = document.querySelector('.i_two')
    const weatherIcon2 = document.createElement('img')
    weatherIcon2.classList.add('imgs')
    weatherIcon2.src = `${data.forecast.day2_icon}`
    icon2.appendChild(weatherIcon2)

    const con2 = document.querySelector('.c_two')
    con2.textContent = `${data.forecast.day2_text}`

    const temp2 = document.querySelector('.t_two')
    temp2.textContent = `${data.forecast.day2_temp}°C`
    
    //weather forecast for day3
    const day3 = document.querySelector('.h_three')
    day3.textContent = format(new Date(`${data.forecast.day3_date}`), 'EEEE')

    const icon3 = document.querySelector('.i_three')
    const weatherIcon3 = document.createElement('img')
    weatherIcon3.classList.add('imgs')
    weatherIcon3.src = `${data.forecast.day3_icon}`
    icon3.appendChild(weatherIcon3)

    const con3 = document.querySelector('.c_three')
    con3.textContent = `${data.forecast.day3_text}`

    const temp3 = document.querySelector('.t_three')
    temp3.textContent = `${data.forecast.day3_temp}°C`

    return data

}

export { createUI }