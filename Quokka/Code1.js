// Quokka.js Weather API Fetch Example

const apiKey = 'bcccaf2e736f31f586bbaf430626fbd5' // Replace with your OpenWeatherMap API key
const city = 'New York'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// Fetching weather data
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    if (data.cod !== 200) {
      throw new Error(`Error ${data.cod}: ${data.message}`)
    }
    console.log('Weather Data:', data) // Quokka displays real-time weather data
    const temperature = data.main.temp
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed
    const weatherDescription = data.weather[0].description
    console.log(`Temperature in ${city}: ${temperature}°C`)
    console.log(`Humidity: ${humidity}%`)
    console.log(`Wind Speed: ${windSpeed} m/s`)
    console.log(`Weather: ${weatherDescription}`)
  })
  .catch((error) => console.error('Error fetching weather data:', error))

// Quokka Live Comments
// ? apiUrl
// ? City Temperature, Humidity, Wind Speed
