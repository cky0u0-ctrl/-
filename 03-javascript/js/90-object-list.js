// 사람 정보를 저장할 오브젝트 배열
const users = [
    {
        name: "수이",
        age: 40,
        성별: "여자"
    }, {
        name: "홍김",
        age: 50,
        성별: "남자"
    }, {
        name: "홍녹차",
        age: 60,
        성별: "여자"
    }, {
        name: "홍장미",
        age: 20,
        성별: "여자"
    }, {
        name: "리쿠",
        age: 3,
        성별: "남자"
    }, {
        name: "시온",
        age: 25,
        성별: "남자"
    }, {
        name: "이안",
        age: 19,
        성별: "여자"
    },
]

// 성별이 남자만 찾아서 새로운 배열만들기
let men = users.filter(u => u.성별 == "남자");
console.log(men);

// ul태그 생성하기
let person = document.createElement("ul");
// 태그 클래스명 주기
// person.className = "person-list1";
// person.setAttribute("class", "person-list2");
person.classList.add("person-list")

// li태그 생성하기
men.forEach(m => {
    let li = document.createElement("li");
    //li안에 내용물 넣기
    li.innerHTML = `<h3>${m.name}</h3>
<p>${m.age}</p>
<p>${m.성별}</p>`
    // 생성된 li를 person에 붙이기
    person.append(li)
})

// person-wrap
let personWrap = document.querySelector(".person-wrap");
personWrap.append(person);

