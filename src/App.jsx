import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'


function App() {
  const [weatherInfo, setWeatherInfo] = useState(null)
  const successGeo = (pos) => {
    const lat = pos.coords.latitude 
    const long = pos.coords.longitude
    const API_KEY = "67b046aea16ebfb28212963d0b927dcb"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    axios.get(url)
      .then(({data})=> setWeatherInfo(data))
      .catch((err)=> console.log(err))
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successGeo)
  }, [])
  return (
    <main className='main'>
      <Weather weatherInfo={weatherInfo}/>
    </main>
  )
}

export default App
