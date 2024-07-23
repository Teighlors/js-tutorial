const apiKey = "e9b415b8c1886bc4d6a4f1d59dac28e1";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.className = "fas fa-cloud";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.className = "fas fa-sun";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.className = "fas fa-cloud-rain";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.className = "fas fa-cloud-showers-heavy";
        }
    }

    searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
    })
