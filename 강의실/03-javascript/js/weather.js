// 날씨 api값을 저장할 변수
const API_KEY = "d53713eb404ab6439ad905a901815e48"
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}




// 선택자 변수

let iconArea = document.querySelector(".icon img");
let tempArea = document.querySelector(".temp");
let descArea = document.querySelector("description");
let placeArea = document.querySelector(".place")
// 위치 정보를 가져올 함수
function getCurrentPos() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true, timeout: 1000, maximumAge: 0
        })
    })
}



// 날씨 정보를 가져올 함수
async function getWeather(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric `
    let response = await fetch(url);
    console.log(response)
    let data = response.json();
    console.log(data);
    return data;

}


// DOM에 날씨 정보를 표시할 함수
function renderWeather(data) {
    console.log(data);
    let temp = data.main.temp;
    let place = data.name;
    let des = data.weather[0].descripiton;
    let icon = data.weather[0].icon;
    let iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`


    tempArea.innerHTML = `${temp}도`;
    placeArea.innerHTML = place;
    // descArea.innerHTML = des;
    console.log(icon);
    iconArea.setAttribute("src", iconurl);
}

// 초기함수
// 위치를 가져오는 함수를 호출하여 받아온 정보를
// 날씨를 가져오는 함수의 매개값으로 전달하여 날씨 받아오기
// DOM에 보여주기 함수실행
async function initWeather() {
    // 1.위치값 받아오기
    let pos = await getCurrentPos();
    // let latitude = pos.coords.latitude;
    // let latitude = pos.coords.longitude;
    // 구조분해 할당
    let { latitude, longitude } = pos.coords;

    // 2.위치값을 가지고 날씨 정보 받아오기
    let weatherData = await getWeather(latitude, longitude);
    // 3.화면 뿌려주기
    renderWeather(weatherData);
}

initWeather();
