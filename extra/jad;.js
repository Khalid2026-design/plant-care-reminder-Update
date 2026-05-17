// const apiKey = "YOUR_API_KEY";

// const searchBtn = document.getElementById("search-btn");
// const cityInput = document.getElementById("city-input");
// const weatherBox = document.getElementById("weather-box");

// searchBtn.addEventListener("click", () => {

//     const city = cityInput.value;

//     if(city === ""){
//         weatherBox.innerHTML = "❌ Please enter city name";
//         return;
//     }

//     const url =
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     fetch(url)

//     .then(response => response.json())

//     .then(data => {

//         console.log(data);

//         if(data.cod != 200){
//             weatherBox.innerHTML = "❌ " + data.message;
//             return;
//         }

//         weatherBox.innerHTML = `
//             <h2>🌍 ${data.name}</h2>
//             <p>🌡 Temperature: ${data.main.temp}°C</p>
//             <p>☁ Weather: ${data.weather[0].description}</p>
//             <p>💨 Wind Speed: ${data.wind.speed} km/h</p>
//             <p>💧 Humidity: ${data.main.humidity}%</p>
//         `;
//     })

//     .catch(error => {
//         console.log(error);
//         weatherBox.innerHTML = "❌ Network Error";
//     });

// });


const apiKey = "YOUR_API_KEY";

const city = "Kandahar";

const result = document.getElementById("result");

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)

.then(response => response.json())

.then(data => {

    const temp = data.main.temp;

    let message = "";

    if(temp >= 30){
        message = "🔥 Weather is HOT";
    }
    else{
        message = "❄ Weather is COLD";
    }

    result.innerHTML = `
        <h2>${data.name}</h2>

        <p>🌡 Temperature: ${temp}°C</p>

        <p>${message}</p>
    `;

})

.catch(error => {

    console.log(error);

    result.innerHTML = "❌ Error Loading Weather";

});