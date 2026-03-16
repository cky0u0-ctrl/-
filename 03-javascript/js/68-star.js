// 별 저장 
let stars = document.querySelectorAll(".stars>span");
// 카운터를 저장할 변수 (쿼리셀렉터 all은 태그 마크업,css 여러개일때)
let countShow = document.querySelector(".count");
// 리셋버튼
let reset = document.querySelector(".reset-count");


stars.forEach((star, id) => {
    console.log("전체별:", stars);
    console.log("별", stars, id);
    star.addEventListener("click", (e) => {
        // currentTarget 이벤트를 준 대상 찾기
        console.log("클릭한별:", e.currentTarget, id);
        stars.forEach((s, i) => {
            if (i <= id) {
                s.classList.add("active")
            } else {
                s.classList.remove("active")

            }
        })
        // append, innerHTML(innerText), textContent
        countShow.textContent = id + 1
    })
})


// reset 버튼을 클릭하면 전부 초기화
reset.addEventListener("click", () => {

    stars.forEach((s) => {
        s.classList.remove("active")
    })
    countShow.innerHTML = 0;
    // countShow.textContent=0;

})