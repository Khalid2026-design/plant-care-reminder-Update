


async function getWeather() {
    const apiKey = "b7e28fd68cf24796c19d826dc1311dbf";
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=Kandahar&appid=" +
        apiKey +
        "&units=metric";

    try {
        const response = await fetch(url);
        const data = await response.json();

        const condition = data.weather[0].main;
        const description = data.weather[0].description;
        const temp = data.main.temp;
        const sugg = document.getElementById("sugg");
        const city = data.name;
        let message = "";

        if (condition === "Clear") {
            message = "☀️ Clear";
            sugg.textContent =
                "نن هوا صافه او لمرینه ده شاید ستاسی نباتات اوبو نه ضرورت پیدا نکی ";
        } else if (condition === "Clouds") {
            message = "☁️ Clouds";
            sugg.textContent =
                "نن لژ څه وریځ شکاری نو شاید باران وشی او دا یو شه خبر ده ";
        } else if (condition === "Rain") {
            message = "🌧 Rain";
            sugg.textContent =
                "نن د باران د وریدو امکان شته شایو باران وشی دا شه ذیری ده ";
        } else {
            message = "🌤 " + condition;
            sugg.textContent =
                "ماشالله شایسته باران اوری او ستاسی نباتات هو ابو نه ضرورت نه لری دا یو شه خبر ده";
        }

        document.getElementById("city").innerHTML = city;
        document.getElementById("result").innerHTML = message + " " + temp + "°C";
        document.querySelector(".tempp").textContent = temp + "°C";
        document.getElementById("description").innerHTML = description;
    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Weather Not Loading";
    }
}

getWeather();