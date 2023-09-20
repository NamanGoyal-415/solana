let icon = document.querySelector(".icon");
let page = document.querySelector(".mobile-view");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector(".left-0")){
        page.classList.toggle("left-0");
    }
})




let accordian = document.querySelectorAll(".accordian");

accordian.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");

        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})

