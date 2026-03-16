let likes = document.querySelectorAll(".like>a:first-child");
let review = document.querySelectorAll(".review-list-wrap");
let moreBtn = document.querySelector(".review-more-btn");
console.log(likes);

likes.forEach(like => {
    like.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(like)
        let likeCount = like.children[1];
        console.log(likeCount);

        let count = parseInt(likeCount.innerHTML);
        count++;
        likeCount.innerHTML = count;

    })
})

moreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let reviewHeight = review.scrollHeight;
    review.Style.height = reviewHeight + "px";
    moreBtn.Style.display = "none";
})

