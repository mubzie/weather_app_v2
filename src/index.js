import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"
import { createUI } from "./modules/DOM"

const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search_btn')

createUI('lagos')

searchBtn.addEventListener('click', (e) => {
    e.preventDefault()

    let city = searchInput.value
    
    createUI(city)
})


