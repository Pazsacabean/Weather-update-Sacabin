<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Weather Update - Iligan City</title>
   <style>
       body {
           font-family: Arial, sans-serif;
           background-color: #f0f8ff;
           color: #red;
           padding: 20px;
           text-align: center;
       }
       #weather {
           margin-top: 20px;
           padding: 20px;
           background-color: #ffffff;
           border-radius: 5px;
           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
           display: inline-block;
       }
   </style>
</head>
<body>
   <h1>Weather Update - Iligan City</h1>
   <div id="weather">
       <p>Loading weather data...</p>
   </div>

   <script>
document.addEventListener('DOMContentLoaded', async function() {
   const apiKey = '36cd30d5637d402790e60804241908';
   const cityName = 'Iligan';
   const apiEndpoint = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}`;


   try {
       const response = await fetch(apiEndpoint); // Wait for the fetch to complete
       const weatherData = await response.json(); // Wait for the response to be parsed into JSON
       console.log(weatherData);


       const weatherContainer = document.getElementById('weather');
       const temperatureInCelsius = weatherData.current.temp_c;
       const weatherDescription = weatherData.current.condition.text;
       const humidityLevel = weatherData.current.humidity;


       weatherContainer.innerHTML = `
           <h2>${cityName}</h2>
           <p><strong>Temperature:</strong> ${temperatureInCelsius}°C</p>
           <p><strong>Weather:</strong> ${weatherDescription}</p>
           <p><strong>Humidity:</strong> ${humidityLevel}%</p>
       `;
   } catch (error) {
       const weatherContainer = document.getElementById('weather');
       weatherContainer.innerHTML = `<p>Unable to retrieve weather data: ${error.message}</p>`;
   }
});
   </script>
</body>
</html>
