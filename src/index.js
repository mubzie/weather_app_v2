import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"
import { createUI } from "./modules/DOM"

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search_btn')

createUI('lagos')

const clearDOM = () => {
    const date = document.querySelector('.date').textContent = ''

    const condition = document.querySelector('.condition').textContent = ''

    // const weatherIcon = document.createElement('img').src = ''

    const region = document.querySelector('.region').textContent = ''

    const temp = document.querySelector('.temp').textContent = ''

    const humidity = document.querySelector('.humidity').textContent = ''

    const feelslike = document.querySelector('.feelslike').textContent = ''

    const windSpeed = document.querySelector('.windspeed').textContent = ''
    
    const heading = document.querySelector('.header_forecast_child').textContent = ''

    const day1 = document.querySelector('.h_one').textContent = ''
    // const weatherIcon1 = document.createElement('img').src = ''
    const con1 = document.querySelector('.c_one').textContent = ''
    const temp1 = document.querySelector('.t_one').textContent = ''

    
    const day2 = document.querySelector('.h_two').textContent = ''
    // const weatherIcon2 = document.createElement('img').src = ''
    const con2 = document.querySelector('.c_two').textContent = ''
    const temp2 = document.querySelector('.t_two').textContent = ''

    
    const day3 = document.querySelector('.h_three').textContent = ''
    // const weatherIcon3 = document.createElement('img').src = ''
    const con3 = document.querySelector('.c_three').textContent = ''
    const temp3 = document.querySelector('.t_three').textContent = ''

    const image = document.querySelector('.img')
    image.parentNode.removeChild(image)

    const images = document.querySelectorAll('.imgs')
    images.forEach(img => {
        img.parentNode.removeChild(img)
    })

}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let city = searchInput.value
    
    clearDOM()

    createUI(city)

})


