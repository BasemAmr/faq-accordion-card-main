document.addEventListener("DOMContentLoaded", () => {
    // getting needed elements
    let questionElements = document.querySelectorAll(".question");
    let illustrationBox= document.querySelector(".illustration");
    // turning it into an array
    questionElements = Array.prototype.slice.call(questionElements);

    // to store the value of clicked question to decide, open or close the accordion
    let clicked_id = null;

    // Iterate over the node list to add "click" event handling
    questionElements.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            // Getting question-box
            let parentBox = e.target.parentElement;

            // to check if the element is clicked twice, so close the accordion
            if (clicked_id == questionElements.indexOf(e.target)) {
                parentBox.classList.remove("active-faq-box");
                illustrationBox.classList.remove("active-animation");
                clicked_id = null;
            } else {
                // Remove active class from last clicked element
                if (clicked_id == null) {} else {
                    questionElements[clicked_id].parentNode.classList.remove("active-faq-box");
                }

                // Adding active class, updating the id
                parentBox.classList.add("active-faq-box");
                illustrationBox.classList.add("active-animation");
                clicked_id = questionElements.indexOf(e.target);
            }
        });
    });
});