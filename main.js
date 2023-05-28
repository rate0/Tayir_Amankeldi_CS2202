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