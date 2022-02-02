//In the following Code, the commented out lines are part of the functionality of also adding the sections with JavaScript

//Defining 
const navbar = document.querySelector("ul");

//These are all the sections which could be defined in an array in order to build the DOM with JavaScript
/* 
const sections = ["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6", "Section 7", "Section 8", "Section 9"];
*/

const main = document.querySelector("main");
const sections = Array.from(document.getElementsByTagName("section"));

//Function for Checking if the element i put in the function is in the viewport
function isInViewPort(section) {
    //defining the rect Variable with all its getBoundingClientRect Informations
    const rect = section.getBoundingClientRect();
    //defining the variables when the function is considered as true --> (isInViewport(argument))

    return (
        rect.top >= -250 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + 250
    );
}

//Looping through all the Elements in the Item Array. Every Element stands for one Section with specific classes and its own navigation link in the navbar
sections.forEach((section, i) => {

    //Creating a section HTML Element with its attributes etc.
    /*     
    const section = document.createElement("section");
     section.innerHTML = `  
            <div class="landing__container">
            <h2>Section ${i+1}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, rerum harum iste quasi ipsum impedit, nulla inventore repellat atque animi dolorem cumque, blanditiis aperiam laboriosam dolor non dicta odio? Mollitia incidunt error officiis
            quam atque reiciendis, et, fugit iusto sit excepturi perspiciatis nulla!</p>
            </div>` 
    */

    //Adding the classlist and id to each section
    section.classList.add(`div_element${i+1}`);
    section.setAttribute("id", `section${i + 1}`);

    /*     
    section.dataset = `section${i + 1}`;
    main.appendChild(section);
     */

    //Creating a Link HTML element with its attributes, Eventlistener etc.
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = section.dataset.nav;
    li.appendChild(a);
    navbar.appendChild(li);
    a.addEventListener("click", function() {
        window.scroll({
            top: section.offsetTop - 100,
            behavior: "smooth"
        })

    })

    //Adding the Functionality to each Element in the For Loop in order show and hide the elements dependent of their viewport position.
    window.addEventListener("scroll", function() {
        if (isInViewPort(section)) {
            section.classList.add("active")
            li.classList.add("highlight")
        } else {
            section.classList.remove("active")
            li.classList.remove("highlight")
        };
    })

})