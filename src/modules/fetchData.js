const fetchWeatherData = async (city) => {
    
    
    const loadingState2 = document.querySelector('.loading_state')
    const contentView = document.querySelector('.left')
    
    try {
        
        loadingState2.style.display = 'flex'

        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=6f5bcbd8a54a427889d120216231903&q=${city}&days=4&aqi=no&alerts=no`, {mode: 'cors'})
        const data = await response.json()
        
        
        loadingState2.style.display = 'none'
        contentView.style.display = 'flex'
        
        return data
        
    } catch (error) {
        
        // loadingState2.style.display = 'flex'
        // loadingState2.textContent = 'Oops! we couldn\'t fecth weather information. please try again'
        console.log("failed to fetch data")
        
    }
    
}

const getWeatherinfo = (data) => {

    const location = {
        region: data.location.region,
        country: data.location.country,
        time: data.location.localtime
    }

    const current = {
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        temp: data.current.temp_c,
        feelslike: data.current.feelslike_c,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph
    }

    const forecast = {

        // forecast data for day 1
        day1_date: data.forecast.forecastday[1].date,
        day1_temp: data.forecast.forecastday[1].day.avgtemp_c,
        day1_text: data.forecast.forecastday[1].day.condition.text,
        day1_icon: data.forecast.forecastday[1].day.condition.icon,
        
        // forecast data for day 2
        day2_date: data.forecast.forecastday[2].date,
        day2_temp: data.forecast.forecastday[2].day.avgtemp_c,
        day2_text: data.forecast.forecastday[2].day.condition.text,
        day2_icon: data.forecast.forecastday[2].day.condition.icon,
        
        // forecast data for day 3
        day3_date: data.forecast.forecastday[3].date,
        day3_temp: data.forecast.forecastday[3].day.avgtemp_c,
        day3_text: data.forecast.forecastday[3].day.condition.text,
        day3_icon: data.forecast.forecastday[3].day.condition.icon,
    }

    return { location, current, forecast}
}

export { fetchWeatherData, getWeatherinfo }