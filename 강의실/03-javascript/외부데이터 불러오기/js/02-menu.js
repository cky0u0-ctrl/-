// 
let menuBtn = document.querySelector(".menu-tab")
let menuShow = document.querySelector(".menu-show-list");

// 외부데이터를 object로 만들어서 저장할 배열
let allMenuItems = [];

// 화면에 메뉴 뿌려주는 함수
function renderMenu(cate) {
    // 기존 데이터 비우기
    menuShow.innerHTML = "";

    // 조건에 맞는 요소만 찾아서 보여주기
    let filteredMenus = cate === "all"
        ? allMenuItems
        : allMenuItems.filter(item => item.category === cate);


    filteredMenus.forEach(item => {
        let liItem = document.createElement("li");
        liItem.textContent = item.menu;
        menuShow.append(liItem);
    })


}


// 버튼 이벤트 등록, 버튼생성함수
function createButtons(cateList) {
    console.log("받은 카테:", cateList);
    // tab-menu 생성하기 .menu-list
    cateList.forEach(menu => {
        let li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = menu;
        button.setAttribute("data-filter", menu);
        li.append(button);
        // console.log(li);
        menuBtn.append(li);
    })

    // 모든 버튼을 저장할 배열변수
    let allBtns = menuBtn.querySelectorAll("button");
    allBtns[0].classList.add("active");

    // 이벤트 등록하기
    allBtns.forEach(btn => {
        [
            btn.addEventListener("click", () => {
                let cateType = btn.getAttribute("data-filter");
                console.log(cateType);
                allBtns.forEach(b => b.classList.remove("active"))
                btn.classList.add("active");
                renderMenu(cateType);
            })
        ]
    })
}


// 외부데이터 불러오기
async function fetchMenu() {
    try {

        let menu = await fetch("./data/menuData2.json");
        console.log(menu);
        // object로 변환
        let data = await menu.json();
        console.log(data);
        allMenuItems = data;

        // 카테고리 추출하기
        // 추출된 카테고리를 저장할 변수
        let categories = [];
        // 첫번째 all추가
        categories.push("all");
        // categories.push("all", "kor", "jap", "ch", "viernam")

        // 카테고리에서 중복되지 않게 찾아서 categories에 넣기
        // includes 배열에서 데이터가 포함되었는지를 찾을때 사용하는 메서드
        //결과값 true/ false 
        allMenuItems.forEach(item => {
            if (!categories.includes(item.category)) {
                categories.push(item.category)
            }
        });

        console.log(categories);
        // 버튼생성
        createButtons(categories);

        // 내용물 보여주기
        renderMenu("all");
    }
    catch (error) {
        console.log("데이터 불러오기 실패:", error)
    }
}

// 데이터를 불러올 함수 호출
fetchMenu();


