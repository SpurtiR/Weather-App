import axios from 'axios';
import React, { useState } from 'react'

export default function Weather() {

    const[city,setCity]=useState("");
    const [weather,setWeather] = useState();

    const handleCityChange = (e) => {
        setCity(e.target.value) 
    }

    const fetchWeather = async () => {
      try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6b991760b53182463db2416ce6daceda'}`)
        setWeather(response)
      }
      catch(err){
        console.log("Error fetching weather data",err);
      }
    }

    const handleClick = () =>{
        fetchWeather()

    }

  return (
    <div className='weather-container'>
        <input type='text' placeholder='Enter City Name' value={city} onChange={handleCityChange} />
        <button onClick={handleClick}>Check Weather</button>
        {weather && <>
        <div className='weather-info'>
          <h3>{weather.data.name}</h3>
          <p>Temperature is {weather.data.main.temp}</p>
          <p>{weather.data.weather[0].description}</p>
        </div>
      
        </>}
    </div>
  )
}
