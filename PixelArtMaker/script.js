// Storing the Parent Element for the grid
let pixel_canvas = document.querySelector(".pixel_canvas");
//Storing the Submit Button
let btn = document.getElementById("btn");


// Creating the grids 
function makeGrid(x, y) {

    //Delete rows to start
    pixel_canvas.innerHTML = ``;

    // Loop to insert rows
    for (let j = 1; j <= y; j++) {
        var tr = document.createElement("tr");
        pixel_canvas.appendChild(tr);

        // Loop to insert the pixel cells
        for (let i = 1; i <= x; i++) {
            //Creating a new pixel
            let pixel = document.createElement("td");
            //Setting the classname to "pixel"
            pixel.setAttribute('class', 'pixel');
            // Defining the parent element, to store the td element in there
            pixel_canvas.appendChild(pixel);

            //Adding a click event for each pixel
            pixel.addEventListener('click', function(event) {
                // When the cell is clicked, the background color changes to the selected color
                event.target.style.backgroundColor = document.getElementById('input_colour').value;
            });
        }
    }
}

//Adding the click event to the submit button
btn.addEventListener("click", function(event) {
    event.preventDefault();
    //Storing the grid height value
    let height = document.getElementById("input_height").value;
    // Storing the grid width value
    let width = document.getElementById("input_width").value;
    //as soon as the information is available call the function which creates the grid
    makeGrid(width, height);
})