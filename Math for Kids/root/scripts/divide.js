document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const myAudio = document.getElementById('myAudio');

    function generateQuestion() {
        let n1, n2, correctAnswer;
        do {
            n2 = Math.floor(Math.random() * 9) + 1; 
            correctAnswer = Math.floor(Math.random() * 10); 
            n1 = n2 * correctAnswer;
        } while (n1 > 81 || n1 < 1); 

        num1.textContent = n1;
        num2.textContent = n2;

        const wrongAnswers = [
            correctAnswer + 1,
            correctAnswer > 0 ? correctAnswer - 1 : correctAnswer + 2 
        ];

        const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);

        option1.textContent = options[0];
        option2.textContent = options[1];
        option3.textContent = options[2];
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = parseInt(num1.textContent) / parseInt(num2.textContent);
        if (parseInt(selectedOption.textContent) === correctAnswer) {
         
            generateQuestion();
        } else {
            myAudio.play();
            
        }
    }

    option1.addEventListener('click', () => checkAnswer(option1));
    option2.addEventListener('click', () => checkAnswer(option2));
    option3.addEventListener('click', () => checkAnswer(option3));

    generateQuestion();
});
