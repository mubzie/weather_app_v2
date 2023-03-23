import { fetchWeatherData, getWeatherinfo } from "./modules/fetchData"
import { createUI } from "./modules/DOM"


// const search = document.getElementById('search') 
// const value = search.value

let city = 'ibadan'

// search.addEventListener('click', createUI)
createUI(city)

