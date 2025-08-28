// heart counting
let favCount = 0;
    const countEl = document.getElementById("heart-count");
    const hearts = document.querySelectorAll(".heart-icon");

    hearts.forEach(heart => {
      heart.addEventListener("click", () => {
          favCount++;
          countEl.innerText = favCount;
        })
    })
console.log(hearts)