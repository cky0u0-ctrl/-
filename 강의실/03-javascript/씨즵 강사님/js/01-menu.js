// dom 선택자
let filterBtns = document.querySelectorAll(".menu-tab button");
let menuShow = document.querySelector(".menu-show-list");

//json으로 저장할 배열 만들기
let allMenuItems = [];

//버튼 이벤트 등록하기
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        //속성으로 저장된 data-filter값 가져오기
        let cateType = btn.getAttribute("data-filter");
        console.log(cateType);
        //모든 버튼은 active클래스가 사라지고
        filterBtns.forEach(b => b.classList.remove("active"))
        //클릭한 버튼만 active클래스가 들어가도록
        btn.classList.add("active");
        //
        renderMenu(cateType);
    })
})

//데이터 뿌려는 함수
function renderMenu(cate) {
    console.log("화면에 보여주기");

    //이전 자료 지우기
    menuShow.innerHTML = "";

    //조건문 ? 조건이참일때실행할문장:조건이거짓일때 실행할문장
    // cate =="all" ? 모든메뉴: 모든메뉴.filter(변수 => 변수===cate)
    let filteredMenus = cate === "all" ? allMenuItems : allMenuItems.filter(item => item.category === cate);

    filteredMenus.forEach(item => {
        let liItem = document.createElement("li");
        liItem.textContent = item.menu;
        menuShow.append(liItem)
    })
}
//외부데이터 불러오는 함수
async function fetchMenu() {
    try {
        //데이터 불러오기
        let menu = await fetch("./data/menuData.json");
        console.log(menu);
        //불러온 데이터를 오브젝트로 변환
        let data = await menu.json();
        console.log(data);
        allMenuItems = data;
        renderMenu("all");
    }
    catch (error) {
        //에러 발생시
        console.log("데이터 불러오기 실패:", error);
    }
}
fetchMenu();
