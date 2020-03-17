/*--------------nav link active--------------*/

/*// Get the container element
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
}*/

/*--------------more information about me active--------------*/

// Get the modal
/*var modal = document.getElementById("modal-more");
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
};*/

/*--------------Burger Menu--------------*/

/*
function scrollNav() {
    $('.nav a').click(function(){
        //Animate
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 160
        }, 400);
        return false;
    });
    $('.scrollTop a').scrollTop();
}
scrollNav();*/

/*
Resume Download
 */

/*
$('a#resume').attr({target: '_blank',
    href  : 'assets/resume.pdf'});*/

function download_file(fileURL, fileName) {
    // for non-IE
    if (!window.ActiveXObject) {
        var save = document.createElement('a');
        save.href = fileURL;
        save.target = '_blank';
        var filename = fileURL.substring(fileURL.lastIndexOf('/')+1);
        save.download = fileName || filename;
        if ( navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search("Chrome") < 0) {
            document.location = save.href;
// window event not working here
        }else{
            var evt = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });
            save.dispatchEvent(evt);
            (window.URL || window.webkitURL).revokeObjectURL(save.href);
        }
    }

    // for IE < 11
    else if ( !! window.ActiveXObject && document.execCommand)     {
        var _window = window.open(fileURL, '_blank');
        _window.document.close();
        _window.document.execCommand('SaveAs', true, fileName || fileURL)
        _window.close();
    }
}
