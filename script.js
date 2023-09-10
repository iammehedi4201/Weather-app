const kalvinToCalsius = (temperature) =>{


   const kalvinTocelsius = temperature-273.15;


   return kalvinTocelsius.toFixed(0);

}


const selectSearchBtn = document.getElementById("searchBtn");

selectSearchBtn.addEventListener("click", function () {

  const selectInput = document.getElementById("textInput").value;

  console.log("The city Name is:", selectInput);

  displayData(selectInput);

});

function displayData (city){
  fetch(
    `https:///api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c3e9a76c5719d0501161811267a06be`
  )
    .then((Response) => Response.json())
    .then((data) =>{
       

        // document.getElementById(
        //     "weather-icon"
        // ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        document.getElementById("weather-icon").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);


        const cityName = document.getElementById("cityName");

        cityName.innerText = data.name;

        const temperature = document.getElementById("temperature");

        temperature.innerText = kalvinToCalsius(data.main.temp);

        const highestTemperature = document.getElementById("high-temperature");

        highestTemperature.innerText = kalvinToCalsius(data.main.temp_max);

        const lowestTemperature = document.getElementById("low-temperature");

        lowestTemperature.innerText = kalvinToCalsius(data.main.temp_min);

        const temperatureDetails = document.getElementById("temperatureDetails");

        temperatureDetails.innerText = data.weather[0].main;

       

    })
    .catch(error =>console.error())
   
};



