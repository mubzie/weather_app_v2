import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"
import { createUI } from "./modules/DOM"

let searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search_btn')

createUI('lagos')

const clearDOM = () => {
    const date = document.querySelector('.date').textContent = ''

    const condition = document.querySelector('.condition').textContent = ''

    const region = document.querySelector('.region').textContent = ''
    const temp = document.querySelector('.temp').textContent = ''
    const humidity = document.querySelector('.humidity').textContent = ''
    const feelslike = document.querySelector('.feelslike').textContent = ''
    const windSpeed = document.querySelector('.windspeed').textContent = ''
    const heading = document.querySelector('.header_forecast_child').textContent = ''

    const day1 = document.querySelector('.h_one').textContent = ''
    const con1 = document.querySelector('.c_one').textContent = ''
    const temp1 = document.querySelector('.t_one').textContent = ''

    const day2 = document.querySelector('.h_two').textContent = ''
    const con2 = document.querySelector('.c_two').textContent = ''
    const temp2 = document.querySelector('.t_two').textContent = ''

    const day3 = document.querySelector('.h_three').textContent = ''
    const con3 = document.querySelector('.c_three').textContent = ''
    const temp3 = document.querySelector('.t_three').textContent = ''

    const image = document.querySelector('.img')
    if(image) image.parentNode.removeChild(image)

    const images = document.querySelectorAll('.imgs')
    if(images) images.forEach(img => {
        img.parentNode.removeChild(img)
    })

}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    clearDOM()

    const contentView = document.querySelector('.left')

    let city = searchInput.value

    contentView.style.display = 'none'
    
    createUI(city)

    searchInput = document.getElementById('search').value = ''
    
})


