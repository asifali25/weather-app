const btn=document.querySelector(".btn"),input=document.getElementById("cityText"),cityWheather=document.querySelector(".cityWheather"),cityForm=document.querySelector(".cityForm");function makeRequest(e){e.preventDefault();const t=input.value;input.value="",console.log(t),fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=ff697e191f2efe5231bb0aa632195bbd`).then((e=>{if(console.log(e),!e.ok)throw Error(e.statusText);return e.json()})).then((e=>{console.log(e),cityWheather.innerHTML=`\n        <div class="wheatherData">\n            <div class="wheatherDataTemp">\n                <span class="temp">Temprature</span>\n                <span class="tempText">${Math.round(e.main.temp-275.15)}</span>\n                <span class="tempDegree"><sup>0</sup>C</span>                \n            </div>\n\n            <div class="wheatherDataDetils">\n                <p>City: ${e.name}</p>\n                <p>Humidity: ${e.main.humidity}%</p>\n                <p>Max Temprature: ${Math.round(e.main.temp_max-275.15)} <sup>0</sup> C</p>\n                <p>Min Temprature: ${Math.round(e.main.temp_min-275.15)} <sup>0</sup> C</p>\n                <p>Feels Like: ${Math.round(e.main.feels_like-275.15)} <sup>0</sup> C </p>\n                <p>Wind: ${Math.round(3.6*e.wind.speed)} km/h</p>\n            </div>\n        </div>       \n        `})).catch((e=>{console.log(e),cityWheather.innerHTML=`<p class="errorMessage">${e}</p>`}))}btn.addEventListener("click",makeRequest),console.log("hi");
//# sourceMappingURL=index.46a6dc05.js.map