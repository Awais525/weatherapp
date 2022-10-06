import { useState } from "react";
import axios from "axios";
import Show from "./Show"

const App=()=>{
  const [city,setcity]=useState(" ");
  const [data,setdata]=useState({
    description:"",
    temp:0,
    sunrise:0,
    country:""
  });
   
  const handleClick=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8dd666c3c64eee59ee7fb3c6de133362
    `).then((res)=>{setdata({
      description:res.data.weather[0].description,
      temp:res.data.main.temp,
      sunrise:res.data.sys.sunrise,
      country:res.data.sys.country
    })})
  }
  return(
    <>
    <div>
      <h4 className="text-left py-1">M.Awais </h4>
    </div>
    <div className="container my-5 text-center">
    <h1 className="py-3">Weather App</h1>
    
    <h6>Enter the City Name !!!</h6>
     
     <input type="text" value={city} onChange={(e)=>{setcity(e.target.value)}} placeholder="Enter City Name"></input>

     <button type='submit' className="btn btn-primary mx-2"   onClick={handleClick }>Click</button>

    </div>
    <Show t1={data}></Show>
    </>
  )

}
export default App;