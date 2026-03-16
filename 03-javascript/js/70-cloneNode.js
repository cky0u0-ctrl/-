let listEl = document.querySelector(".list");
// listEl의 첫번째 자식을 복사
let firstCopy = listEl.firstElementChild.cloneNode(true);

// listEl의 마지막 자식을 복사
let lastCopy = listEl.lastElementChild.cloneNode(true);


// 첫번째 자식은 listEl마지막에 붙이고

listEl.append(firstCopy);

// 마지막 자식은 listEl의 맨앞에 붙이기
listEl.prepend(lastCopy);

// 
let menuEl = document.querySelector(".menu");
let menuFirst = menuEl.firstElementChild.cloneNode(false);
let menuLast = menuEl.lastElementChild.cloneNode(false);

menuEl.append(menuFirst);
menuEl.prepend(menuLast);