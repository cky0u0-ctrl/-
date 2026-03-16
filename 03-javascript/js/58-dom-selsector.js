// 1.태그선택자
// h1을 선택하여 글자색초록
// let hTitle = document.getElementsByTagName("h1")[0]
let hTitle = document.querySelector("h1");

// 2.스타일주기
// 선택자.style.속성="값"
// 선택자.style["backgroundColor"] = "값";
// 선택자.style["background-color"] = "값";
// 선택자.style.setProperty("속성", "값");
// 선택자.style.cssText = "속성:값;속성:값";

hTitle.style.color = "green"

// p태그 선택하여 배경색 pink

// let pTag = document.getElementsByTagName("p");
// console.log(pTag);
// for (i = 0; i < pTag.length; i++) {
//     pTag[i].style.background = "pink";
// }

let pTag = document.querySelectorAll("p");
for (let p of pTag) {
    p.style.backgroundColor = "pink";
}


// 2.클래스 선택자 첫번째
// .text클래스를 선택하여 글자크기 50px
// 배열로 생성되므로, 몇번째인지 
// let cText = document.getElementsByClassName("text")[0]

let cText = document.querySelector(".text");

cText.style.setProperty("font-size", "50px");

// 3.아이디 선택자 
// 밑줄 , 글자색, 글자크기
// let idText = document.getElementById("idText");
let idText = document.querySelector("#idText");
// 아이디면 샵 , 클래스면 점 앞에 찍기

idText.style.cssText = "text-decoration:underline;color:green;font-size:30px;"

// 4.form선택자
let myForm = document.myForm.uuId;
myForm.style["backgroundColor"] = "skyblue"


