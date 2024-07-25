// let temperature=document.querySelector("#temperature")
// const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=Lahore&format=json&u=f';
// const options = {
    
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '586ba8bb80msh5979604d3d9ecd7p1a43c5jsn154c0d8f8fa1',
// 		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
// 	}
// };

// const getFacts= async ()=>{
//  const response = await fetch(url, options);
//     console.log(response);
//     const ret= response.json();
// 	 console.log(ret);
//      let temp= ret.temperature;
//      console.log(temp);
//      temperature.innerHTML=ret.temperature

    
  
//  }
//  getFacts().catch(console.error());

document.addEventListener("DOMContentLoaded", function() {
    const temperatureElement = document.querySelector("#temp");
    const textElement = document.querySelector("#text");
    const pressureElement = document.querySelector("#pressure");
    const visibilityElement = document.querySelector("#visibility");
    const humidityElement = document.querySelector("#humidity");
    const speedElement = document.querySelector("#speed");
    const chillElement = document.querySelector("#chill");
    const btn = document.querySelector("#btn");
    const locationInput = document.querySelector("#location");
    const locElement=document.querySelector("#loc");
 

    const getWeather = async (location) => {
        const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '586ba8bb80msh5979604d3d9ecd7p1a43c5jsn154c0d8f8fa1',
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const ret = await response.json();

            const temp = ret.current_observation.condition.temperature;
            const text = ret.current_observation.condition.text;
            const pressure = ret.current_observation.atmosphere.pressure;
            const visibility = ret.current_observation.atmosphere.visibility;
            const humidity = ret.current_observation.atmosphere.humidity;
            const speed = ret.current_observation.wind.speed;
            const chill = ret.current_observation.wind.chill;
            const location = ret.location.city;

            temperatureElement.innerHTML = `${temp}`;
            textElement.innerHTML = `${text}`;
            pressureElement.innerHTML = `${pressure}`;
            visibilityElement.innerHTML = `${visibility}`;
            humidityElement.innerHTML = `${humidity}`;
            speedElement.innerHTML = `${speed}`;
            chillElement.innerHTML = `${chill}`;
            locElement.innerHTML = `${location}`;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Button Clicked");
        const location = locationInput.value;
        if (location) {
            getWeather(location);
        } else {
            console.error("No Location");
        }
    });

    // Call the function to fetch and display the weather data for a default location
    getWeather("Lahore");
});
