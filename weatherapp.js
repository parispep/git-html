async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = '2b542ac0f6b8a62b8ace06fc1f74dd6f';
  const weatherResult = document.getElementById("weatherResult");

  if (!city) {
    weatherResult.innerHTML = "Enter a city"
    // console.log(city)
  }

  try {
    const res = await fectch(`https://api.openweathermap.org/data/2.5/weather?q=${city}`)
  }
  catch (error) { }
}