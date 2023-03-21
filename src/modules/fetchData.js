const fetchWeatherData = async () => {

    try {
        
        const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=6f5bcbd8a54a427889d120216231903&q=lagos&days=4&aqi=no&alerts=no', {mode: 'cors'})
        const data = await response.json()
    
        return data

    } catch (error) {

        console.log("failed to fetch data")
        
    }
    
}

export { fetchWeatherData }