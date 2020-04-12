/*
* Download CV
*/
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

/*
* Open modal in pop up
*/
// Get the modal
let modal = document.getElementById("imgModal");
let body = document.querySelector('body');

// Get the button that opens the modal
let btn = document.getElementById("btnModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
	body.classList.add('no-scroll');
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	body.classList.remove('no-scroll');
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target === modal) {
		body.classList.remove('no-scroll');
		modal.style.display = "none";
	}
};

/*
* Slider inside popup
*/
let imgUrl = [
                'assets\\img\\feu\\Home1.PNG',
                'assets\\img\\feu\\Login.PNG',
                'assets\\img\\feu\\Product.PNG',
                'assets\\img\\feu\\Product2.PNG',
                'assets\\img\\feu\\Signin.PNG'
            ],
    imgAlt = [
                 'home page',
                 'login page',
                 'product page 1',
                 'product page 2',
                 'sign in page'
             ],
    imgTag = document.getElementById('imgSlide'),
    numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = imgUrl.length - 1;
    if (numero > imgUrl.length - 1)
        numero = 0;
    imgTag.src = imgUrl[numero];
    imgTag.alt = imgAlt[numero];
}

$('.js-toggle-menu').click(function(e){
    e.preventDefault();
    $('.mobile-header-nav').slideToggle();
    $('.menu-item').toggleClass('open');
});

