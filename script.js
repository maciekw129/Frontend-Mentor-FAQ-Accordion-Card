/* VARIABLES */

 const question = document.querySelectorAll('.main__question');

/* FUNCTION FOR SHOWING ANSWER */

 const showAnswer = (event) => {
    const answer = event.target.parentNode.nextElementSibling.firstChild;
    const arrow = event.target.parentNode.lastChild;
    const question = event.target.parentNode;
    answer.style.maxHeight = '100px';
    arrow.style.transform = 'rotate(180deg)';
    question.style.fontWeight = 'bold';
    question.removeEventListener('click', event => showAnswer(event));
    question.addEventListener('click', event => hideAnswer(event));
 }

 /* FUNCTION FOR HIDING ANSWER */

 const hideAnswer = (event) => {
    const answer = event.target.parentNode.nextElementSibling.firstChild;
    const arrow = event.target.parentNode.lastChild;
    const question = event.target.parentNode;
    answer.style.maxHeight = '0';
    arrow.style.transform = 'rotate(0)';
    question.style.fontWeight = 'normal';
    question.removeEventListener('click', event => hideAnswer(event));
    question.addEventListener('click', event => showAnswer(event));
 } 

 /* ADDING FIRST EVENT LISTENER */

 question.forEach(question => {
    question.addEventListener('click', event => showAnswer(event));
})

