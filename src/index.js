import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"
import { createUI } from "./modules/DOM"

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search_btn')

createUI('lagos')

const clearDOM = () => {
    const date = document.querySelector('.date')
    date.textContent = ''

    const condition = document.querySelector('.condition')
    condition.textContent = ''

    const icon = document.getElementById('icon')
    const weatherIcon = document.createElement('img')
    weatherIcon.src = ''
    icon.appendChild(weatherIcon)

    const region = document.querySelector('.region')
    region.textContent = ''

    const temp = document.querySelector('.temp')
    temp.textContent = ''

    const humidity = document.querySelector('.humidity')
    humidity.textContent = ''

    const feelslike = document.querySelector('.feelslike')
    feelslike.textContent = ''

    const windSpeed = document.querySelector('.windspeed')
    windSpeed.textContent = ''

    const heading = document.querySelector('.header_forecast_child')
    heading.textContent = ''

    const day1 = document.querySelector('.h_one')
    day1.textContent = ''
    const icon1 = document.querySelector('.i_one')
    const weatherIcon1 = document.createElement('img')
    weatherIcon1.src = ''
    const con1 = document.querySelector('.c_one')
    con1.textContent = ''
    const temp1 = document.querySelector('.t_one')
    temp1.textContent = ''
    
    const day2 = document.querySelector('.h_two')
    day2.textContent = ''
    const icon2 = document.querySelector('.i_two')
    const weatherIcon2 = document.createElement('img')
    weatherIcon2.src = ''
    const con2 = document.querySelector('.c_two')
    con2.textContent = ''
    const temp2 = document.querySelector('.t_two')
    temp2.textContent = ''
    
    const day3 = document.querySelector('.h_three')
    day3.textContent = ''
    const icon3 = document.querySelector('.i_three')
    const weatherIcon3 = document.createElement('img')
    weatherIcon3.src = ''
    const con3 = document.querySelector('.c_three')
    con3.textContent = ''
    const temp3 = document.querySelector('.t_three')
    temp3.textContent = ''
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let city = searchInput.value
    
    clearDOM()

  createUI(city)

})


