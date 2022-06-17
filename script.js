const btn = document.querySelector('.btn');
const input = document.getElementById('cityText');
const cityWheather = document.querySelector('.cityWheather'); 
const cityForm = document.querySelector('.cityForm');   


btn.addEventListener('click', makeRequest)


function makeRequest(e) {
    e.preventDefault()
    const value = input.value
    input.value =''
    console.log(value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=ff697e191f2efe5231bb0aa632195bbd`)
    
    .then((res) => {
        console.log(res)       
        if(!res.ok) {
            throw Error(res.statusText)
        } 
        return res.json()    
    }).then((data) => {
        console.log(data)
        cityWheather.innerHTML = `
        <div class="wheatherData">
            <div class="wheatherDataTemp">
                <span class="temp">Temprature</span>
                <span class="tempText">${Math.round(data.main.temp - 275.15)}</span>
                <span class="tempDegree"><sup>0</sup>C</span>                
            </div>

            <div class="wheatherDataDetils">
                <p>City: ${data.name}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Max Temprature: ${Math.round(data.main.temp_max - 275.15)} <sup>0</sup> C</p>
                <p>Min Temprature: ${Math.round(data.main.temp_min - 275.15)} <sup>0</sup> C</p>
                <p>Feels Like: ${Math.round(data.main.feels_like - 275.15)} <sup>0</sup> C </p>
                <p>Wind: ${Math.round(data.wind.speed * 3.6)} km/h</p>
            </div>
        </div>       
        `   
             

    }).catch((error) => {
        console.log(error)
        cityWheather.innerHTML = `<p class="errorMessage">${error}</p>`;        
    })

}

console.log('hi')