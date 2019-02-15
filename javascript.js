//The hamburger Navigation using JQuery. https://codepen.io/g13nn/pen/eHGEF

$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
});

// "It is okay to e-mail me function", from Derren Wilson

var currenttime = new Date();
var currenthour = currenttime.getHours();

var emailmessage = "You are <strong>OK</strong> to email me now";

if(currenthour<9 || currenthour > 22){
  emailmessage = "I am asleep, sorry!";
}

var getheading = document.querySelector('#contact h2');
getheading.insertAdjacentHTML('afterend','<p class="contact-time">'+emailmessage+'</p>');

//Scroll JS, from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function scrollIt(destination, duration = 200, easing = "linear", callback) {
    destination = destination.replace("#", "");
    var d = document.getElementById(destination);
    var destination = d.offsetTop;

    const easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return --t * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - --t * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + --t * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
        }
    };

    const start = window.pageYOffset;
    const startTime =
        "now" in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.getElementsByTagName("body")[0].clientHeight;
    const destinationOffset =
        typeof destination === "number" ? destination : destination.offsetTop;

    const destinationOffsetToScroll = Math.round(
        documentHeight - destinationOffset < windowHeight ?
        documentHeight - windowHeight :
        destinationOffset
    );

    if ("requestAnimationFrame" in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now =
            "now" in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, (now - startTime) / duration);
        const timeFunction = easings[easing](time);
        window.scroll(
            0,
            Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
        );

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}

var  clickHandler  =  function  (event) {
var  moveThePageTo  =  this.getAttribute("href");
event.preventDefault();
scrollIt(moveThePageTo,  1600,  "easeInOutCubic");
};
var  anchors  =  document.querySelectorAll(".page-nav a");
for  (var  i  =  0;  i  <  anchors.length;  i++) {
var  current  =  anchors[i];
current.addEventListener("click",  clickHandler,  false);
} 
