// .wrap, .icon, #code 저장할 변수
let wrap = document.querySelector(".wrap");
let icon = document.querySelector(".icon");
let code = document.querySelector("#code");
// 위치를 저장할 변수
let xPos = 0;
let yPos = 0;

// 키보드 이벤트
document.addEventListener("keydown",(e)=>{
    // console.log(e);
    console.log(e.key, e.code)
    code.value = e.key;
    switch(e.key){
        case "ArrowRight":
            xPos += 10;
            break;
        case "ArrowLeft":
            xPos -= 10;
            break;
        case "ArrowDown":
            yPos += 10;
    }
    // icon.style.left=`${xPos}px`
    // icon.computedStyleMap.setProperty("left", `${xPos}px`)
    icon.style.transform = `translateX(${xPos}px)`
})