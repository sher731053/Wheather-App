const apiKey ="4ca6bbc0f4364a3b3d51e9cff941fca4";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const search = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
                
            }else{
                var data = await response.json();
            

            document.querySelector(".city").innerText =data.name;
            document.querySelector(".temp").innerText =Math.round(data.main.temp)+ "°C";
            document.querySelector(".humidity").innerText =data.main.humidity + "%";
            document.querySelector(".wind").innerText =data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
              weatherIcon.src = "img/clouds.png";  
            }else if(data.weather[0].main=="Clear"){
                weatherIcon.src = "img/clear.png";
            }else if(data.weather[0].main=="Rain"){
                weatherIcon.src = "img/rain.png";
            }else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src = "img/drizzle.png";
            }else if(data.weather[0].main=="Mist"){
                weatherIcon.src = "img/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
        }

        searchbtn.addEventListener("click",()=>{
            checkWeather(search.value);
        })
        checkWeather(city);
