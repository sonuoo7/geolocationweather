function getweatherdata() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;
    document.getElementById("lat").innerHTML = latitude;
    document.getElementById("long").innerHTML = longitude;
    latitude.innerHTML = latitude;
    longitude.innerHTML = longitude;
    let Api = "1f2e8d457dbab5e64056bfeb2856a68a";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Api}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        showWethereData(data);
      });
  });
}
function showWethereData(data) {
  document.getElementById("map").innerHTML =
    "<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyATznej5Kk5pnzMCjDg-V3eZ4f6EaqPoT0&q=29.4010712 ,80.0881241' width='100%' height='600'></iframe>";
  document.getElementById("loc").innerHTML = `${data.name}`;
  document.getElementById("latti").innerHTML = `${data.coord.lat}`;
  document.getElementById("logit").innerHTML = `${data.coord.lon}`;
  document.getElementById("Time_Zone").innerHTML = `${data.timezone}`;
  document.getElementById("Wind_speed").innerHTML = `${data.wind.speed}`;
  document.getElementById("pressure").innerHTML = `${data.main.pressure}`;
  document.getElementById("Humidity").innerHTML = `${data.main.humidity}`;
  document.getElementById("Wind_Direction").innerHTML = `${data.wind.speed}`;
  document.getElementById("Temp").innerHTML = `${data.main.temp}`;
  document.getElementById("Feels_like").innerHTML = `${data.main.feels_like}`;
}

// to display map

let button = document.getElementById("btn");
button.onclick = getweatherdata();
