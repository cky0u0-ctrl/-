// 
let uId = document.querySelector("#uId");
let uIdCount = document.querySelector(".num");
let checks = document.querySelectorAll(".check input");
let likeColor = document.querySelector("#likeColor");


uId.addEventListener("input", function (e) {
    // 자기 자신을 뜻하는 this를 사용하려면 일반 함수에서만 가능

    console.log(this.value);
    let count = this.value.length;
    uIdCount.textContent = count;


})

uId.addEventListener("select", function () {
    this.Style.backgroundColor = "pink";
})
// chage event checkbox,radio, select,input 글자입력 ☆리액트사용!!!
checks.forEach((ch) => {
    ch.addEventListener("change", (e) => {
        console.log(e.target);


    })
})

// select
likeColor.addEventListener("change", function (e) {
    // e.target 실제로 이벤트를 들은 대상
    // e.currentTarger 이벤트를 준 대상
    // e.target.value
    // e.target.selectedIndex option중 선택된 순서
    // e.target.options[순서].text
    console.log(e.currentTarget, e.target);
    console.log("선택한 value", e.target.value);
    console.log("선택한 순서", e.target.selectedIndex);
    console.log("옵션에 보여지는 글자:", e.target.options[e.target.selectedIndex].text);
})

// form,전송
myForm.addEventListener("submit", () => {
    alert("전송이 되었습니다")
})

myForm.addEventListener("reset", () => {
    alert("모든 자료가 리셋되었습니다")
})