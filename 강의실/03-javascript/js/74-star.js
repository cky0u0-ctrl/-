// // 
// let star = document.querySelector(".star")

// //클릭한 위치를 저장할 변수
// let xPos = 0;
// let yPos = 0;

// // 별의 위치값을 저장할 변수
// // getComputedStyle(선택자).속성 => 문자로 들어온다
// let starX = parseInt(getComputedStyle(star).left);
// let starY = parseInt(getComputedStyle(star).top);


// // 문서를 클릭하면 x,y 위치값을 받아서 변수
// document.addEventListener("click", (e) => {
//     xPos = e.clientX;
//     yPos = e.clientY;
//     console.log(xPos, yPos);
// })

// // 별을 이동시킬 함수 만들기
// function moveStar() {
//     // 별의 위치를 전체 길이에 10 % 씩 이동하도록
//     // starx 0 xPos 100
//     // starX += (xPos - starX) * 0.1;
//     starY += (yPos - starY) * 0.1;
//     // star.Style.left = starX + "px";
//     star.Style.top = starY + "px";

//     // requestAnimationFrame. 60fps
//     requestAnimationFrame(moveStar)
// }

// moveStar();

let star = document.querySelector(".star");
// 클릭한 위치를 저장할 변수
let xPos = 0;
let yPos = 0;

// 별의 위치값을 저장할 변수
// getComputedStyle(선택자).속성 => 문자로 들어온다
let starX = parseInt(getComputedStyle(별).left);
let starY = parseInt(getComputedStyle(별).top);

// 문서를 클릭하면 x,y 위치값을 받아서 변수
document.addEventListener("click", (e) => {
    xPos = e.clientX;
    yPos = e.clientY;
    console.log(xPos, yPos);
})

// 별을 이동시킬 함수 만들기
function moveStar() {
    // 별의 위치를 전체 길이에 10%씩 이동하도록
    // starX 0 xPos 100
    starX += (xPos - starX) * 0.1;
    starY += (yPos - starY) * 0.1;
    star.style.left = starX + "px";
    star.style.top = starY + "px";
    // requestAnimationFrame 60fps
    requestAnimationFrame(moveStar)
}
moveStar();