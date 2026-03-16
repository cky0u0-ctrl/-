let box = document.querySelector(".box");
let addBtn = document.querySelector(".addBtn");
let removeBtn = document.querySelector(".removeBtn");
let toggleBtn = document.querySelector(".toggleBtn");

// 선택자.on이벤트타입=function(){}
// 이벤트선택자.addEventListener("이벤트타입",function(){});
// addBtn을 클릭하면 .active 클래스를 .box에 추가로 주기
addBtn.addEventListener("click", () => {
    box.classList.add("active");
})

// removeBtn을 클릭하면 .active 클래스가 .box에 사라지도록
removeBtn.addEventListener("click", () => {

    box.classList.remove("active");
})

// toggleBtn을 클릭하면 active클래스가 추가/제거
toggleBtn.addEventListener("click", () => {
    box.classList.toggle("active");
})