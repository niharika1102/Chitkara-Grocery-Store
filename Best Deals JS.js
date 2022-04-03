let i = 0;

let j = 4;

const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

function next() {

    document.getElementById( "content" + (i+1)). 
    classList.remove("active");
    i =  (j + i + 1) % j;
    document.getElementById("content" + (i+1)). 
    classList.add("active");
    indicator(i+1);
}

function prev() {

    document.getElementById( "content" + (i+1)). 
    classList.remove("active");
    i =  (j + i - 1) % j;
    document.getElementById("content" + (i+1)). 
    classList.add("active");
    indicator(i+1);
}

function indicator(num) {
    dots.forEach(function(dot) {
        dot.style.backgroundColor = 'transparent';
    });
    document.querySelector(".dot-container button:nth-child(" + num + ")").style.backgroundColor = "#58e078"
}

function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("active");
    });
    document.getElementById('content' + index).
    classList.add("active");
    i = index - 1;
    indicator(index);
}