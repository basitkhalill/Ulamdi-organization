const menuIcon = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-menu");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
    nav.classList.add("show");
    menuIcon.style.display = "none"; // hide the menu icon
    closeIcon.style.display = "block"; // display the close icon
});

closeIcon.addEventListener("click", () => {
    nav.classList.remove("show");
    menuIcon.style.display = "block"; // display the menu icon
    closeIcon.style.display = "none"; // hide the close icon
});

window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".popup");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }
});

window.addEventListener("scroll", function () {
    let content = document.querySelectorAll(".fadeup");

    for (let i = 0; i < content.length; i++) {
        let element = content[i];
        if (isElementInViewport(element)) {
            element.classList.add("visible");
        } else {
            element.classList.remove("visible");
        }
    }
});
function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
