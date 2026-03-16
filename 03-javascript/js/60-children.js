// .list의 첫번째 자식을 선택하여 배경색
let list = document.querySelector(".list");
let first = list.firstElementChild;
first.style.backgroundColor = "pink";

// .list마지막 자식을 선택하여 글자쓰기 40px
let last = list.lastElementChild;
last.style.fontSize = "40px";

// .list의 모든 자식을 선택하여 테두리
let childs = list.children;
console.log(childs);
for (item of childs) {
    item.style.border = "1px solid"
}

// 자식의 개수구하기
console.log(list.childElementCount);
console.log(list.children.length);
console.log(childs.length);

// .menu자식으로 li 첫번째 배경 하늘색
let menuFirst = document.querySelector(".menu>li:first-child");
menuFirst.style.backgroundColor = "skyblue";
//.menu자식으로 li 마지막 글자 크기를 30px
let menuLast = document.querySelector(".menu>li:last-child");
menuLast.style.fontsize = "30px";

// 테두리 파랑
let menuChilds = document.querySelectorAll(".menu li");

// forEach
menuChilds.forEach((el) => {
    el.style.border = "1px solid blue"
});