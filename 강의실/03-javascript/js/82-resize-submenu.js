// // .sub-menu
// let subMenu = document.querySelectorAll(".sub-menu");
// let subBg = document.querySelector(".sub-bg");
// // .main-menu
// let mainMenu = document.querySelector(".main-menu");
// // .main-menu>li>a
// let mainLinks = document.querySelectorAll(".main-menu>li>a");
// // ham-btn
// let hamBtn = document.querySelector(".ham-btn>a");

// // close-btn
// let closeBtn = document.querySelector(".close-btn>a");
// // 숨겨놓은 전체 메뉴
// let navWrap = document.querySelector(".nav-wrap");




// // 윈도우의 사용가능한 너비 저장
// let wWidth;

// // 윈도우의 너비값 체크할 함수
// function siteInit() {
//     wWidth = window.innerWidth;
//     console.log(wWidth);
// }
// siteInit();

// //윈도우의 너비가 변경되면 윈도우의 너비값 다시 받기
// window.addEventListener("resize", () => {
//     siteInit();

// })

// // mainMenu에 마우스가 들어가면 submenu가 보이도록 pc 768이상에서
// mainMenu.addEventListener("mouseenter", () => {
//     if (wWidth > 768) {
//         subMenu.forEach((sub) => {
//             sub.classList.add("active");
//         })
//         subBg.classList.add("active");
//     }
// })

// mainMenu.addEventListener("mouseleave", () => {
//     if (wWidth > 768) {
//         subMenu.forEach(sub => {
//             sub.classList.remove("active")
//         })
//         subBg.classList.remove("active")

//     }
// })



// // ham
// hamBtn.addEventListener("click", (e) => {
//     navWrap.Style.left = 0;
//     navWrap.Style.transition = "0.3s";

// })

// // closeBtn
// closeBtn.addEventListener("click", (e) => {
//     navWrap.Style.left = "-120%"
// })

// // mainLinks
// mainLinks.forEach(main => {
//     main.addEventListener("click", (e) => {
//         if (wWidth <= 768) {
//             let next = main.nextElementSibling;
//             console.log(next);
//             // submenu의 높이값을 숨겨지기 전에 offHeight, 
//             // 숨겨진 높이도 구할 수 있다scrollHeight
//             // let subHeight = next.
//         }
//     })
// })

//.sub-menu
let subMenu = document.querySelectorAll(".sub-menu");
let subBg = document.querySelector(".sub-bg");
//.main-menu
let mainMenu = document.querySelector(".main-menu");
//.main-menu>li>a
let mainLink = document.querySelectorAll(".main-menu>li>a");
//ham-btn
let hamBtn = document.querySelector(".ham-btn>a");
//close-btn
let closeBtn = document.querySelector(".close-btn>a");
//nav-wrap
let navWrap = document.querySelector(".nav-wrap");

//윈도우의 사용가능한 너비 저장
let wWidth;

//윈도우의 너비값 체크할 함수
function siteInit() {
    wWidth = window.innerWidth;
    console.log(wWidth);
}

siteInit();

//윈도우의 너비가 변경되면 윈도우의 너비값 다시 받기
window.addEventListener("resize", () => {
    siteInit();
    navWrap.style.left = "-120%";
    subMenu.forEach(sub => {
        sub.style.height = "";
        sub.classList.remove("active");

    })
})

//main-menu에 마우스가 들어가면 sub-menu가 보이도록 pc 버전 768이상에서
mainMenu.addEventListener("mouseenter", () => {
    if (wWidth > 768) {
        subMenu.forEach((sub) => {
            sub.classList.add("active");
        })
        subBg.classList.add("active");
    }
})

mainMenu.addEventListener("mouseout", () => {
    if (wWidth > 768) {
        subMenu.forEach((sub) => {
            sub.classList.remove("active");
        })
        subBg.classList.remove("active");
    }
})

//ham
hamBtn.addEventListener("click", (e) => {
    navWrap.style.left = 0;
    navWrap.style.transition = "0.3s";
})
//closebtn
closeBtn.addEventListener("click", (e) => {
    navWrap.style.left = "-120%";
})
//mainLinks
mainLink.forEach(main => {
    main.addEventListener("click", (e) => {
        if (wWidth <= 768) {
            let next = main.nextElementSibling;
            console.log(next);
            //submenu의 높이값을 구해서 높이값 만큼 css높이를 준다
            //숨겨지기 전에 offHeigth

            //   서브메뉴가 보이는지 체크하기
            let isOpen = next.style.height && next.style.height !== "0px"
            if (isOpen) {
                next.style.height = 0;
            }
            else {        //숨겨진 높이도 구할 수 있는 scrollHeight
                let subHeight = next.scrollHeight;

                console.log(subHeight);
                next.style.height = subHeight + "px"
            }
        }
    })
})