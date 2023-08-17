import { useState } from "react"

const Weather = ({weatherInfo}) => {
    const [isCelsius, setIsCelsius] = useState(true)

    const equationForCel = (tempK) => {
        return (tempK - 273.15).toFixed(1)
    }
    const equationForFar = (tempK) =>{
        return (((tempK - 273.15)* 1.8) + 32).toFixed(1)
    }
    const handleF = () => {
        setIsCelsius(!isCelsius)
    }
    const convert = isCelsius ? equationForCel(weatherInfo?.main.temp) : equationForFar(weatherInfo?.main.temp)
  return (
    <div className="information">
        <h2 className="information-h2">
            {weatherInfo?.name}, {weatherInfo?.sys.country}
        </h2>
        <div className="information-holder">
            <div className="information-first"> 
                <h4 className="information-first_h4">{weatherInfo?.weather[0].description}</h4>
                <div className="information-first_bottom">
                    <div>
                        <span className="information-first_span">{convert}{isCelsius ? "C°" : "F°"}</span>
                    </div>
                    <div>
                        <img src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`} alt="" className="information-img"/>
                    </div>
                </div>
            </div>
            <div className="information-second">
                <div className="information-second_divs">
                    <div>
                        <img className="icons" src={"/images/Wind.png"} alt=""/>
                    </div>
                    <span className="second-spans">{weatherInfo?.wind.speed}m/s</span>
                </div>
                <div className="information-second_divs">
                    <div>
                        <img className="icons" src={"/images/Humidity.png"} alt=""/>
                    </div>
                    <span className="second-spans">{weatherInfo?.main.humidity}%</span>
                </div>
                <div className="information-second_divs">
                    <div>
                        <img className="icons" src={"/images/Group.png"} alt=""/>
                    </div>
                    <span className="second-spans">{weatherInfo?.main.pressure}hPa</span>
                </div>
            </div>
        </div>
        <div className="information-change">
            <button onClick={handleF} className="information-button"> 
                {isCelsius ? "set to F°" : "set to C°"}
            </button>
        </div>
    </div>
  )
}
export default Weather