// Dom 선택자
// 버튼을 넣어줄 영역
let btnWrap = document.querySelector(".btn-wrap")

// 목록을 보여줄 영역
let benefitShow = document.querySelector(".benefit-card-list");

// object파일을 저장할 배열변수
let allBenefits = [];



// 조건에 맞는 카드를 보여줄 함수
function renderBenefit(info) {

    benefitShow.innerHTML = "";

    // let filteredBenefit = allBenefits;
    let filteredBenefit = info === "전체" ? allBenefits
        : allBenefits.filter(item => item.partnerInfo === info);
    console.log("보여질내용:", filteredBenefit);
    filteredBenefit.forEach(item => {
        let liItem = document.createElement("li");
        liItem.innerHTML = `
        
        <a href="#">

        <diV class="card-img">
        <img src="./images/benefit-card/${item.img}" alt="">
        </div>
        
        <div class="card-info">
        <span class="card-date">
  ${item.date}      </span>
        </div>

        </a>
        `
        benefitShow.append(liItem);

    })



}


// 버튼생성할 함수
function benefitTab(tabMenu) {
    console.log("받은 메뉴:", tabMenu);
    tabMenu.forEach(
        tab => {
            let li = document.createElement("li");
            let button = document.createElement("button");
            button.textContent = tab;
            button.setAttribute("data-filter", tab);
            button.setAttribute("class", "btn");
            li.append(button);
            btnWrap.append(li)
        })

    // 모든 버튼을 저장할 배열 변수
    let allTabs = btnWrap.querySelectorAll("button");
    // 첫번째 버튼 active클래스 추가
    allTabs[0].classList.add("active");

    // 버튼 이벤트 등록
    allTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // let tabType = tab.getAttribute("data-filter");
            let tabType = tab.textContent;
            console.log(tabType);
            // 모든버튼에 클래스 제거
            allTabs.forEach(b => b.classList.remove("active"))
            // 클릭한 버튼만 클래스가 추가
            tab.classList.add("active");
            renderBenefit(tabType);

        })

    })

}


// 데이터를 불러올 함수
async function fetchBenefit() {
    try {
        // 외부데이터를 불러와서 저장할 변수
        // 비동기처리,데이터가 다 불려질때까지 기다려야, response가 들어온다
        // await를 안하면 promise
        let benefit = await fetch("./data/cgvPartnerData.json");
        console.log(benefit);
        // 받은 결과가 json 이므로 object로 변형해서 사용해야된다.
        // await를 안하면 promise
        let data = await benefit.json();
        console.log(data);
        allBenefits = data;


        // 탭메뉴에 해당하는 카테고리 추출하기
        // 카테고리를 추출하여 저장할 배열
        let benefitMenus = [];
        // benefitMenus의 첫번째 요소로 all
        benefitMenus.push("전체");

        // 카테고리(PartnerInfo)가 중복되지 않게 메뉴 추출하여 benefitMenus에 넣기
        allBenefits.forEach(item => {
            if (!benefitMenus.includes(item.partnerInfo)) {
                benefitMenus.push(item.partnerInfo)

            }
        })
        console.log(benefitMenus);
        //메뉴 생성하기
        benefitTab(benefitMenus);


        renderBenefit("전체");





    }
    catch (error) {
        console.log("데이터 로드 실패", error)
    }
}

// 데이터를 불러올 함수 호출
fetchBenefit();