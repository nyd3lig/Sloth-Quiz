const quizAnswers = ["B", "A", "B", "B", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let score = 0;
    let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    console.log(answers)
    answers.forEach((answer, i) => {
        if(answer === quizAnswers[i]){
            score += 20
        }
    });
    
    

    //removes the bootstrap class d-none from result
    result.classList.remove("d-none")
    //scrolls to the top
    scrollTo(0,0)

    let i = 0;
    let animation = setInterval(()=>{
        i++
        //changes the text inside the result span
        result.querySelector("span").innerText = `${i}%`;
        if(i === score){
            clearInterval(animation)
        }
    }, 10)
});