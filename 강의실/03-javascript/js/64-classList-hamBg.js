let bgHam = document.querySelector(".bgHam>a");
let imgHam = document.querySelector(".imgHam img");
let menuWrap = document.querySelector(".mobile-menu-wrap");

//배경햄버거를 클릭하면 그림이 clodse로 변경되고, menuWrap보이도록
bgHam.addEventListener("click", () => {
    console.log("배경버튼")
    bgHam.classList.toggle("active");
    menuWrap.classList.toggle("active")


})

imgHam.addEventListener("click", () => {
    if (menuWrap.classList.contains("active")) {
        imgHam.setAttribute("src", "./images2/ham.svg");
        menuWrap.classList.remove("active");
    }
    else {

        imgHam.setAttribute("src", "./images2/close.svg");
        menuWrap.classList.add("active");
    }

})