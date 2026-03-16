import { Counter } from "./Counter.js";
let showCount = document.querySelector(".count-show span");
let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn")

let counter = new Counter(showCount);


// plusBtn을 클릭하면 숫자증가
plusBtn
    .addEventListener("click", () => {
        console.log("증가")
        counter.increment();

    })
// minusBtn을 클릭하면 숫자 감소plusBtn
minusBtn.addEventListener("click", () => {
    console.log("감소")
    counter.decrement();

})