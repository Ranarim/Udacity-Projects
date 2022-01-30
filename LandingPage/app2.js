const sectionDivs = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");
const items = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7", "Section 8", "Section 9"];
const main = document.querySelector("main");

//Function for Checking if the element i put in the function is in the viewport
function isInViewPort(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


items.forEach((item, i) => {
    const el = document.createElement("section");
    el.innerHTML = `  
            <div class="landing__container">
            <h2>Section ${i+1}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, rerum harum iste quasi ipsum impedit, nulla inventore repellat atque animi dolorem cumque, blanditiis aperiam laboriosam dolor non dicta odio? Mollitia incidunt error officiis
            quam atque reiciendis, et, fugit iusto sit excepturi perspiciatis nulla!</p>
            </div>`
    el.classList.add(`div_element${i+1}`);
    el.setAttribute("id", `section${i + 1}`);
    el.dataset = `section${i + 1}`;
    main.appendChild(el);


    const li = document.createElement("a");
    li.innerHTML = `<li class="navbar_element navbar__section${i+1}">Section ${i+1}</li>`;
    navbar.appendChild(li);
    li.addEventListener("click", function() {
        window.scroll({
            top: el.offsetTop - 100,
            behavior: "smooth"
        })

    })
    window.addEventListener("scroll", function() {
        if (isInViewPort(el)) {
            el.classList.add("active")
            li.classList.add("highlight")
        } else {
            el.classList.remove("active")
            li.classList.remove("highlight")
        };
    })

})