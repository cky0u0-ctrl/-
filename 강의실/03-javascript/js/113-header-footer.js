// header 불러오기
fetch("header.html")
    .then(res => res.text())
    .then(data => {
        document.querySelector("#header").innerHTML = data


    })

fetch("footer.html").then(res => {
    console.log(res)
    // console.log(res.text());
    return res.text();
}).then(data => {
    document.querySelector("#footer").innerHTML = data;
})