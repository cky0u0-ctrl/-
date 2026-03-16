// 버튼
let pagerBtn = document.querySelectorAll(".pager>li");
// 배너
let banners = document.querySelectorAll(".main-slider-list>li");

// 보여지는 배너가 몇번째인지를 체크할 변수
let current = 0;

// 버튼에 클릭이벤트
pagerBtn.forEach((btn, id) => {
    console.log("전체 버튼", pagerBtn);
    btn.addEventListener("click", (e) => {
        console.log("버튼클릭");
        // 이벤트를 준 대상을 찾을때
        console.log("클릭한대상", e.currentTarget);
        console.log("클릭한 대상의 순서", id)

        // 모든 요소는 기본으로 되돌리기

        // 선택한 요소만 active클래스가 적용되도록
        showBanner(id);
        current = id;
    })
})

// 
function showBanner(id) {
    pagerBtn.forEach((b, i) => {
        b.classList.remove("active");
        banners[i].classList.remove("active");
    })
    pagerBtn[id].classList.add("active");
    banners[id].classList.add("active");
}

// 3초마다 배너가 그 다음 배너로 변경되도록
// setInterval("실행할 명령",시간);
// setInterval(함수명,시간);
// setInterval(()=>{},시간)
setInterval(() => {
    current++;
    if (current >= banners.length) current = 0;
    showBanner(current);
}, 3000)