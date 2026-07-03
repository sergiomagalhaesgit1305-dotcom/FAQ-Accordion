document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector(".icon");

            if (answer.style.display === "block") {
                answer.style.display = "none";

                icon.innerHTML = `<img src="assets/images/icon-plus.svg" alt="Plus that sits to the right of the paragraph">`;
            } else {
                answer.style.display = "block";

                icon.innerHTML = `<img src="assets/images/icon-minus.svg" alt="Minus that sits to the right of the paragraph">`
            }
        })
    })
})
