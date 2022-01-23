const mainMenu = document.querySelector(".main_menu");
const openMenu = document.querySelector(".open_menu");
const closeMenu = document.querySelector(".close_menu");

openMenu.addEventListener("click", () => {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
})

closeMenu.addEventListener("click", () => {
    mainMenu.style.top = "-100%";
})