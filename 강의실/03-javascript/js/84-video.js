// video method
// 재생 - play(), 일시정지 - pause(), 완전멈춤 x <명령어존재안한다는 뜻

// video 속성
// currentTime - 비디오의 재생시간을 받아오거나 변경
// paused - 비디오 상태가 재생중인지 멈춘 상태인지를 체크 true/false

// video 이벤트

//ended - video의 재생이 끝났는지 체크

// 
let myVideo = document.querySelector(".video video");
let playPause = document.querySelector(".playPause");
let stopBtn = document.querySelector(".stopBtn");
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");

// playPause
playPause.addEventListener("click", () => {
    if (myVideo.paused) {
        myVideo.play();
        playPause.classList.add("active");
    }
    else {
        myVideo.pause();
        playPause.classList.remove("active");
    }
})

// 
stopBtn.addEventListener("click", function () {
    myVideo.pause();
    myVideo.currentTime = 0;
    playPause.classList.remove("active");
})

nextBtn.addEventListener("click", function () {

    myVideo.currentTime += 3;
})

prevBtn.addEventListener("click", function () {

    myVideo.currentTime -= 3;
})

// 비디오의 재생이 끝나면
myVideo.addEventListener("ended", function () {
    console.log("비디오 재생이 끝남")
})