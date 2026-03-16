let menus = document.querySelectorAll(".tab-list>li>a");
let sections = document.querySelectorAll("main section");

menus.forEach((m, id) => {
    m.addEventListener("click", (e) => {
        e.preventDefault();
        // 섹션의 위치값
        let topPos = sections[id].offsetTop;
        console.log(id, topPos);
        // 윈도우의 스크롤 이동시키기
        window.scrollTo({
            // 위치
            top: topPos,
            //동작
            behavior: "smooth"
        })
    })
})