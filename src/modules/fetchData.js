const fetchWeatherData = async (value) => {
  const loadingState2 = document.querySelector(".loading_state");
  const contentView = document.querySelector(".left");

  try {
    loadingState2.style.display = "flex";

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=e4c82e61567a4d7c945221414230204&q=${value}&days=4&aqi=no&alerts=no`,
      { mode: "cors" }
    );

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    loadingState2.style.display = "none";
    contentView.style.display = "flex";

    return data;
  } catch (error) {
    if (error.message === "400") {
      loadingState2.style.display = "flex";
      loadingState2.textContent =
        "Oops! we couldn't fecth weather information because of server error. please refresh the page";
    } else {
      loadingState2.style.display = "flex";
      loadingState2.textContent =
        "Check that your internet connection is ON and refresh the page";
    }
  }
};

const getWeatherinfo = (data) => {
  const location = {
    name: data.location.name,
    country: data.location.country,
    time: data.location.localtime,
  };

  const current = {
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
    temp: data.current.temp_c,
    feelslike: data.current.feelslike_c,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph,
  };

  const forecast = {
    // forecast data for day 1
    day1_date: data.forecast.forecastday[0].date,
    day1_temp: data.forecast.forecastday[0].day.avgtemp_c,
    day1_text: data.forecast.forecastday[0].day.condition.text,
    day1_icon: data.forecast.forecastday[0].day.condition.icon,

    // forecast data for day 2
    day2_date: data.forecast.forecastday[1].date,
    day2_temp: data.forecast.forecastday[1].day.avgtemp_c,
    day2_text: data.forecast.forecastday[1].day.condition.text,
    day2_icon: data.forecast.forecastday[1].day.condition.icon,

    // forecast data for day 3
    day3_date: data.forecast.forecastday[2].date,
    day3_temp: data.forecast.forecastday[2].day.avgtemp_c,
    day3_text: data.forecast.forecastday[2].day.condition.text,
    day3_icon: data.forecast.forecastday[2].day.condition.icon,
  };

  return { location, current, forecast };
};

export { fetchWeatherData, getWeatherinfo };
