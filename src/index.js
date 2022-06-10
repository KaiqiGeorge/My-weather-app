
  function time(){
    let now = new Date();
    let  hours = now.getHours();
    if(hours<=9){
        hours = `0${hours}`;
    };
    let minutes = now.getMinutes();
    if(minutes <= 9){
        minutes = `0${minutes}`;
    };
    let oldDay = now.getDay();
    let days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    let day=days[oldDay];
    let time = document.querySelector("#time");
   time.innerHTML= `${day}  ${hours}:${minutes}`;};
  time()
    
 
    




function displayTemperature(response){
    console.log(response.data);
    let cityName = document.querySelector(".cityName");
    let weatherDescription = document.querySelector(".weather-description");
    let icon= document.querySelector("#icon");
    let temperatureNumber = document.querySelector(".temperature-number");
    let humidity = document.querySelector(".humidity");
    let wind = document.querySelector(".wind");
    let clouds = document.querySelector(".clouds");

    celsuis= Math.round(response.data.main.temp);
    
    


    cityName.innerHTML = `${response.data.name}`; 
    weatherDescription.innerHTML = `${response.data.weather[0].description}`;
    temperatureNumber.innerHTML = `${Math.round(response.data.main.temp)}`;
    icon.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    icon.setAttribute("alt",`${response.data.weather[0].description}`);
    humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
    wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)}m/s`;
    clouds.innerHTML = `Clouds: ${response.data.clouds.all}%`;
}


let fahrenheit = document.querySelector("#Fah");
let cel = document.querySelector("#Celsius");
fahrenheit.onclick = function tempConvert() {
    cel.classList.remove("active");
    fahrenheit.classList.add("active");


  let tempNew = Math.round((`${celsuis}` * 9) / 5 + 32);
  let temperatureNumber = document.querySelector(".temperature-number");
  temperatureNumber.innerHTML = `${tempNew}`;
};


cel.onclick = function tempConvert() {
    cel.classList.add("active");
    fahrenheit.classList.remove("active");
    let temperatureNumber = document.querySelector(".temperature-number");
       temperatureNumber.innerHTML = `${celsuis}`;

  
};




function search(city){
    let apiKey = "d5a8e815ad3352e76fb600d6bbd808c7";
    let apiUrl =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);


}





let form = document.querySelector("#search-form");
form.onsubmit = function handleSubmit(event){
    event.preventDefault();
    let cityInput  = document.querySelector("#cityInput");
    search(cityInput.value);
};
search("Beijing");