var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
function vh(v) {
    var h = viewportHeight;
    return (v * h) / 100;
}
window.onscroll = function() {
    if (viewportWidth > 768) {
        if (document.body.scrollTop > (35 + vh(4)) || document.documentElement.scrollTop > (35 + vh(4))) {
            $("#navbar-brand").css("height", "7.5vh");
        } else {
            $("#navbar-brand").css("height", "12vh");
        }
    }
}

var navLinks = $(".nav-link");
for (var i = 0; i < navLinks.length; i++) {
    var current = navLinks[i];
    var targetTitle = $(current).data("value"), curTitle = current.innerText;
    if (targetTitle === curTitle) {
        $(current).addClass("active-page");
    }
}

const lang = $("#dropdownMenuLink")[0].innerText;
var dropdowns = $(".dropdown-item");
var langs = ["English", "Kazakh", "Russian"];
langs = langs.filter(x => x !== lang);
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].innerHTML = "<img src='/images/" + langs[i] + ".svg'>" + langs[i];
}

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}
animateValue("lessons-number", 0, 7000, 800);
animateValue("teachers-number", 0, 1000, 800);
animateValue("students-number", 0, 4000, 800);