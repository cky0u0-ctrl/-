// .me의 부모를 찾아서 테두리
let me = document.querySelector(".me");
let meParent = me.parentElement;
console.log(meParent);
meParent.style.border = "1px solid";

// span의 부모를 찾아서 배경색
let span = document.querySelector("span");
let spanParent = span.parentNode;
console.log(spanParent);
spanParent.style.backgroundColor = "skyblue";