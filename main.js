let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function calculateScore() {
    var totalQuestions = 7;
    var score = 0;
    var answers = [
        "correct", // question 1
        "correct", // question 2
        "correct", // question 3
        "correct", // question 4
        "correct", // question 5
        "correct", // question 6
        "correct"  // question 7
    ];

    // iterate over each question and check if the selected answer is correct
    for (var i = 1; i <= totalQuestions; i++) {
        var selectedAnswer = document.querySelector('input[name="question' + i + '"]:checked');
        if (selectedAnswer !== null && selectedAnswer.value === answers[i-1]) {
            score++;
        }
    }

    // display the score on the page
    document.getElementById("score").textContent = "Your score is " + score + "/" + totalQuestions;
    document.getElementById("results").style.display = "block";
}
function playButtonClickSound() {
    var audio = new Audio('button_click_sound.mp3');
    audio.play();
}



// accordian js

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
