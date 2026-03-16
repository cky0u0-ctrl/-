// 
let uId = document.querySelector("#uId");
let uIdCount = document.querySelector(".num");

uId.addEventListener("input",function(e){
    // 자기 자신을 뜻하는 this를 사용하려면 일반함수에서만 가능
    console.log(this.value);
    let count = this.value.length;
    uIdCount.textContent = count;
})

uId.addEventListener("select",function(){
    this.style.backgroundColor = "pink";
})