// 오늘의 날짜 정보 가져오기
let today = new Date();

// 시간
let hours = today.getHours();
console.log(hours);

// day 6~18
// night 18~새벽 6
// 시간 >= 6 && 시간 <= 18 day 나머지 night
if (hours >= 6 && hours <= 18) {
    console.log("day");
    document.querySelector("body").classList.remove('night')

}
else {
    console.log("night");
    // body선택하여 .night클래스 추가
    document.querySelector("body").classList.add("night")
}
