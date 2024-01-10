gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true
});




var texts = [
    "Kya problem hai be tujhe mere se?",
    "Chal chal ye option nhi hai tere paas chup chap no daba!",
    "Ja na be (please)",
    "Please",
    "-_-",
    "Are bas kar No daba de na kya hai",
    "Rashiiiii",
    "Dekh mai terese baat nhi karunga fir kabhi ",
    "PLease na be no daba na"

];
var currentIndex = 0;
var button = document.getElementById('Yes');
var button2 = document.getElementById('No');
var myDiv = document.getElementById('something2')
var image = document.querySelector('#something2 img')

document.getElementById('Yes').addEventListener('click', function() {
    if (currentIndex < texts.length) {
        myDiv.firstChild.nodeValue = texts[currentIndex];
        currentIndex++;
    } else {
        myDiv.firstChild.nodeValue = "Bas itna hi hai iske aage nhi hai kuch ja. Ab to no daba de meri behen! Please";
        button.style.display = "none";
        image.style.display = "flex"
    }
});

button2.addEventListener('click', function() {
    myDiv.firstChild.nodeValue = "Good Good, Mtlb tujhe zinda rehena hai abhi bhi. Good!"
    button.style.display = "none";
    button2.style.display = "none";
    image.style.display = "none";

})

var div1 = document.querySelector('#page12 #something');
var btn1 = document.getElementById('Yes2');
var btn2 = document.getElementById('noButton');
btn1.addEventListener('click', function() {
    div1.firstChild.nodeValue = "NICEEEE!!";
    btn1.style.display = "none";
    btn2.style.display = "none";

})



let video = document.getElementById('myVideo');
let page8 = document.getElementById('page8-2');
let page9 = document.getElementById('page9');

let isVideoPlaying = false;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Video is in view
            if (!isVideoPlaying) {
                video.play();
                isVideoPlaying = true;
            }
        } else {
            // Video is out of view
            if (isVideoPlaying) {
                video.pause();
                isVideoPlaying = false;
            }
        }
    });
}, options);

observer.observe(page8);

window.addEventListener('load', () => {
    let page8Rect = page8.getBoundingClientRect();
    if (page8Rect.bottom > 0 && page8Rect.top < window.innerHeight) {
        video.play();
        isVideoPlaying = true;
    }
});


var typingEffect = new Typed(".multi-text", {
    strings: ["A Good Friend.", "My Best Friend.", "Helpul.", "Caring.", "Supportive."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

document.addEventListener("DOMContentLoaded", function() {
    // Select the div
    const hiddenDiv = document.getElementById("top-right");

    // Set a timeout to make the div appear after 3000 milliseconds (3 seconds)
    setTimeout(function() {
        // Remove the 'hidden' class to display the div
        hiddenDiv.classList.remove("hidden");
    }, 1500);
});

function preventClick() {
    const button = document.getElementById("noButton");
    const container = document.getElementById("page12");

    // Get container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Generate random position values within container boundaries
    const randomX = Math.random() * (containerWidth - button.clientWidth);
    const randomY = Math.random() * (containerHeight - button.clientHeight);

    // Set the button's position using a CSS transform
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}