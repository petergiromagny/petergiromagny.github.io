/*--------------Perspective effect--------------*/

// ===========================================================
// See tutorial at :
// https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
// https://codepen.io/MihaiIonescu/pen/MrLopq
// ===========================================================

(function() {
    // Init
    var container = document.getElementById("container-img"),
        inner = document.getElementById("inner");

    // Mouse
    var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function(event) {
            var e = event || window.event;
            this.x = e.clientX - this._x;
            this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function(e) {
            this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
            this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function() {
            return "(" + this.x + ", " + this.y + ")";
        }
    };

    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);

    //----------------------------------------------------

    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
        return counter++ % refreshRate === 0;
    };

    //----------------------------------------------------

    var onMouseEnterHandler = function(event) {
        update(event);
    };

    var onMouseLeaveHandler = function() {
        inner.style = "";
    };

    var onMouseMoveHandler = function(event) {
        if (isTimeToUpdate()) {
            update(event);
        }
    };

    //----------------------------------------------------

    var update = function(event) {
        mouse.updatePosition(event);
        updateTransformStyle(
            (mouse.y / inner.offsetHeight / 2).toFixed(2),
            (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
    };

    var updateTransformStyle = function(x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };

    //--------------------------------------------------------

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
})();

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
var modal = document.getElementsByClassName("modal-more");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn-information");
var close = document.getElementsByClassName("btn-close");

for (var i = 0; i < btns.length; i++) {
    btn.onclick = function() {
        modal.style.display = "block";
        btn.style.display = "none";
        close.style.display = "block"
    }

    close.onclick = function() {
        modal.style.display = "none";
        close.style.display = "none";
        btn.style.display = "block"
    }
}

/*btn.onclick = function() {
    modal.style.display = "block";
    btn.style.display = "none";
    close.style.display = "block"
}

close.onclick = function() {
    modal.style.display = "none";
    close.style.display = "none";
    btn.style.display = "block"
}*/
