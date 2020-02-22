/*--------------nav link active--------------*/

// Get the container element
var btnContainer = document.getElementById("link");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("link-btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

/*--------------more information about me active--------------*/

// Get the modal
var modal = document.getElementById("modal-more");
var btn = document.getElementById("btn-information");
var close = document.getElementById("btn-close");

btn.onclick = function() {
    modal.style.display = "initial";
    btn.style.display = "none";
    close.style.display = "initial"
};

close.onclick = function() {
    modal.style.display = "none";
    close.style.display = "none";
    btn.style.display = "initial"
};

