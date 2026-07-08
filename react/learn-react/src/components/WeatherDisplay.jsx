const WeatherDisplay = ({info:{city,temp}})=>{
    return(
        <div className="">
<p> Current temperature in {city} is {temp}°C</p>
        </div>
    )
}

export default WeatherDisplay;