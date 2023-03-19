import React,{useState} from 'react';
import './weatherbody.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SlideToggle from "react-slide-toggle";
import PersonIcon from '@mui/icons-material/Person';
import Switch from './switch';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Weatherbody() {

  
  return (
    <div class="wrapper">
      <div class="sidebar">
        <div >
        <div className='left-head'>
        <span><AddBoxIcon/></span>
        <span><MoreHorizIcon/></span>
        <span><Switch/></span>
        </div>
        

      <div className='side-mid'>
      <div class="temperature">
            <h1 id="temp">30</h1>
            <span class="temp-unit">°C</span>
          </div>
          <div class="date-time">
            <p id="date-time">Monday, 12:00 PM</p>
          </div>
          <div class="divider"></div>
          <div class="condition-rain">
            <div class="condition">
              <WbSunnyIcon/>
              <p id="condition">Sunny</p>
            </div>
            <div class="rain">
              <InvertColorsIcon/>
              <p id="rain">Humidity: 82%</p>
            </div>
          </div>
      </div>
          

        </div>
        <div class="location">
          <div class="location-icon">
          <LocationOnIcon/>
          </div>
          <div class="location-text">
            <p id="location">New York, USA</p>
          </div>
        </div>
      </div>
      <div class="main">
        <nav>
          <ul class="options1">
            <p class="hourly">Welcome back Isabella!</p>
            <p>Check out today's weather information</p>
          </ul>
          <ul class="options units">
            <button class="celcius active"><MoreHorizIcon/></button>
            <button class="fahrenheit"><PersonIcon/></button>
          </ul>
        </nav>
         <div className='summary-card'>
         <div className='summ-head'>
         <div className='summ-detail'> <p>Upcoming hour's</p></div>
         <div className='summ-button'>
         <button className='summ-btn1'>Rain precipitations <span><ExpandMoreIcon/></span> </button>
         <button className='summ-btn2'>Next days <span><ChevronRightIcon/></span></button>
         </div>
         </div>

         <div className='sum-daily'>
         <div className='sum-dt'>
         <p>30°C</p>
         <p><WbSunnyIcon/></p>
         <p>12:00 PM</p>
         </div>

         <div className='sum-dt'>
         <p>33°C</p>
         <p><WbSunnyIcon/></p>
         <p>03:00 PM</p>
         </div>
         <div className='sum-dt'>
         <p>35°C</p>
         <p><ThunderstormIcon/></p>
         <p>06:00 PM</p>
         </div>
         <div className='sum-dt'>
         <p>27°C</p>
         <p><WbSunnyIcon/></p>
         <p>09:00 PM</p>
         </div>
         <div className='sum-dt'>
         <p>25°C</p>
         <p><ThunderstormIcon/></p>
         <p>12:00 AM</p>
         </div>
         <div className='sum-dt'>
         <p>28°C</p>
         <p><ThunderstormIcon/></p>
         <p>03:00 AM</p>
         </div>
         <div className='sum-dt'>
         <p>29°C</p>
         <p><WbSunnyIcon/></p>
         <p>06:00 AM</p>
         </div>
         <div className='sum-dt'>
         <p>35°C</p>
         <p><WbSunnyIcon/></p>
         <p>09:00 AM</p>
         </div>
         
         </div>
        <div className='graph-img'>
        <img src='../graph.png'/>
        </div>
         </div>
        <div class="cards" id="weather-cards"></div>
        <div class="highlights">
          <h2 class="heading">More details of today's weather</h2>
          <div class="cards">
          <div class="card2">
              <div className='card-head'>
              <p class="card-heading">Humidity</p>
              <span><InvertColorsIcon/></span>
              </div>
              
              <div class="content">
                <p class="humidity">82%  <span style={{fontSize:"14px"}}>bad</span></p>
               </div>
               <div className='card-bot'>
               <div className='card-prog'><p>good</p>
               <p class="humidity-status">
               <progress id="file" value="100" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>normal</p>
               <p class="humidity-status">
               <progress id="file" value="100" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>bad</p>
               <p class="humidity-status">
               <progress id="file" value="82" max="100"> 32% </progress>
               </p></div>
               
               </div>
            </div>
            <div class="card2">
            <div className='card-head'>
            <p class="card-heading">Wind</p>
            <span><AirIcon/></span>
            </div>
              <div class="content">
                <p class="wind-speed">8 km/h</p>
               
              </div>
              <div className='card-bot2'>
              <div className='card-prog'><p>0</p>
             </div>
              <div className='card-prog'><p>10</p>
             </div>
              <div className='card-prog'><p>20</p>
              </div>
              <div className='card-prog'><p>30</p>
              </div>
              <div className='card-prog'><p>40</p>
              </div>
              
              </div>
              <div className='progbar'>
              <p class="humidity-status">
               <progress id="file" value="20" max="100"> 32% </progress>
               </p>
              </div>
            </div>
            
            
            <div class="card2">
            <div className='card-head'>
            <p class="card-heading">Precipitation</p>
            <span><ThunderstormIcon/></span>
            </div>
             
              <div class="content">
                <p class="sun-rise">1.4cm</p>
                
              </div>
              <div className='card-bot3'>
              <div className='card-prog'><p>0</p>
              <p class="humidity-status">
              <progress id="file" value="100" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>10</p>
              <p class="humidity-status">
              <progress id="file" value="40" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>20</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>30</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>40</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>50</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>60</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>70</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>80</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              <div className='card-prog'><p>90</p>
              <p class="humidity-status">
              <progress id="file" value="0" max="100"> 32% </progress>
              </p></div>
              
              </div>
            </div>
            <div class="card2">
            <div className='card-head'>
            <p class="card-heading">UV Index</p>
            <span><WbSunnyIcon/></span>
            </div>
              <div class="content">
                <p class="uv-index">4 &nbsp;<span style={{fontSize:"14px"}}>medium</span></p>
             
              </div>
              <div className='card-bot4'>
               <div className='card-prog'><p>0-2</p>
               <p class="humidity-status">
               <progress id="file" value="100" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>3-5</p>
               <p class="humidity-status">
               <progress id="file" value="25" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>6-8</p>
               <p class="humidity-status">
               <progress id="file" value="0" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>9-11</p>
               <p class="humidity-status">
               <progress id="file" value="0" max="100"> 32% </progress>
               </p></div>
               <div className='card-prog'><p>11+</p>
               <p class="humidity-status">
               <progress id="file" value="0" max="100"> 32% </progress>
               </p></div>
               
               </div>
            </div>
            
            <div class="card2">
            <div className='card-head'>
            <p class="card-heading">Feels like</p>
            <span><DeviceThermostatIcon/></span>
            </div>
              <div class="content">
                <p class="visibilty">30°</p>
                
              </div>
              <div className='card-bot5'>
              <div className='card-prog'><p>0°</p>
             </div>
              <div className='card-prog'><p>25°</p>
             </div>
              <div className='card-prog'><p>50°</p>
              </div>
              
              </div>
              <div className='progbar'>
              <p class="humidity-status">
               <progress id="file" value="60" max="100"> 32% </progress>
               </p>
              </div>
            </div>
            <div class="card2">
            <div className='card-head'>
            <p class="card-heading">Chances of rain</p>
            <span><BeachAccessIcon/></span>
            </div>
              <div class="content">
                <p class="air-quality">42%</p>
               
              </div>
              <div className='card-bot6'>
              <div className='card-prog'><p>0%</p>
             </div>
              <div className='card-prog'><p>25%</p>
             </div>
              <div className='card-prog'><p>50%</p>
              </div>
              <div className='card-prog'><p>75%</p>
              </div>
              <div className='card-prog'><p>100%</p>
              </div>
              
              </div>
              <div className='progbar'>
              <p class="humidity-status">
               <progress id="file" value="42" max="100"> 32% </progress>
               </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weatherbody
