function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
var visitedNumbers = false;

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
            $("#about-us > div:first-child").css("background-position", "center calc(30px)");
        } else {
            $("#navbar-brand").css("height", "12vh");
            $("#about-us > div:first-child").css("background-position", "center calc(12vh + 30px)");
        }
    }

    if (isElementInViewport($("#numbers")) && !visitedNumbers) {
        animateValue("lessons-number", 0, 7000, 900);
        animateValue("teachers-number", 0, 1000, 900);
        animateValue("students-number", 0, 4000, 900);
        visitedNumbers = true;
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
var langs = [{lang: "English", code: "en"}, {lang: "Kazakh", code: "kk"}, {lang: "Russian", code: "ru"}];
langs = langs.filter(x => x.lang !== lang);
for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].innerHTML = "<img src='/images/" + langs[i].lang + ".svg'>" + langs[i].lang;
    var pathname = window.location.pathname;
    if (pathname.substr(0, 3) === "/kk" || pathname.substr(0, 3) === "/ru") {
        pathname = pathname.substr(3);
    }
    $(dropdowns[i]).attr('href', '/' + langs[i].code + pathname);
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
            obj.innerHTML += '+';
            clearInterval(timer);
        }
    }
    timer = setInterval(run, stepTime);
    run();
}
