// tab-title-list>li를 저장
let tabTitles = document.querySelectorAll(".tab-title-list>li"
);
// tab-content를 저장
let tabContents = document.querySelectorAll(".tab-content-wrap>div");
console.log(tabContents);
// 이벤트 줄 버튼 찾기 /밖안요소 포이치 => 안에요소전부선택 포이치
tabTitles.forEach((tab, id) => {
    console.log(tabTitles);
    tab.addEventListener("click", () => {
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
            tabContents[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabContents[id].classList.add("active");

    })
})















// 첫번째 메뉴를 클릭하면 모든 메뉴에 active를 클래스 제거하고, 해당버튼만 active클래스 적용

// 두번째 메뉴를 클릭하면 메뉴에 active 클래스를 적용하고
// 해당하는 tab-content가 보이도록

// tabTitles[0].addEventListener("click", () => {
//     for (i = 0; i < tabTitles.length; i++) {
//         tabTitles[i].classList.remove("active");
//         tabContents[i].classList.remove("active");
//     } tabTitles[0].classList.add("active");
//     tabContents[0].classList.add("active");
// })

// tabTitles[1].addEventListener("click", () => {
//     for (i = 0; i < tabTitles.length; i++) {
//         tabTitles[i].classList.remove("active");
//         tabContents[i].classList.remove("active");
//     }
//     tabTitles[1].classList.add("active");
//     tabContents[1].classList.add("active");
// })

// tabTitles[2].addEventListener("click", () => {
//     for (i = 0; i < tabTitles.length; i++) {
//         tabTitles[i].classList.remove("active");
//         tabContents[i].classList.remove("active");
//     }
//     tabTitles[2].classList.add("active");
//     tabContents[2].classList.add("active");
// })

// tabTitles[3].addEventListener("click", () => {
//     for (i = 0; i < tabTitles.length; i++) {
//         tabTitles[i].classList.remove("active");
//         tabContents[i].classList.remove("active");
//     }
//     tabTitles[3].classList.add("active");
//     tabContents[3].classList.add("active");
// })