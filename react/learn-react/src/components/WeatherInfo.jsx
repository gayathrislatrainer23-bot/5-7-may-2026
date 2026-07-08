import WeatherDisplay from "./WeatherDisplay";

const WeatherInfo = ()=>{
    let  info = { city: "Chennai", temp: 30 }
    return(
        <div className="">
            <WeatherDisplay info = {info}/>

        </div>
    )
}

export default WeatherInfo;