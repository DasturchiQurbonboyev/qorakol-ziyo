const questions = [
    {
        question: "Hovlida tovuqlar va qo'ylar bor edi. Ularning 3 boshi va 8 oyog'i bor. Qancha tovuq va nechta qo'y?",
        options: ["1 tovuq va 1 qo'y", "3 tovuq va 1 qo'y", "4 tovuq va 2 qo'y", "2 tovuq va 1 qo'y"]
    },
    {
        question: "Bozorda 5 olma va 7 nok bor edi. Olmalar soni noklardan necha marta kam?",
        options: ["2 marta", "3 marta", "1 marta", "5 marta"]
    },
    {
        question: "Bir qozonda 6 ta baliq va 3 ta qovurilgan baliq bor edi. Qancha baliq hali pishirilmagan?",
        options: ["3 ta", "6 ta", "4 ta", "2 ta"]
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('quizQuestion');
const stepCounterElement = document.getElementById('stepCounter');

function showQuestion(index) {
    const questionData = questions[index];
    const questionHTML = `
        <h3 class='question_text'>${questionData.question}</h3>
        <form id="quizForm">
            ${questionData.options.map((option, i) => `
                <label class="option">
                    <input type="radio" name="answer" value="${i}"> ${option}
                </label>
            `).join('')}
        </form>
    `;
    questionElement.innerHTML = questionHTML;
    stepCounterElement.textContent = `${index + 1}/${questions.length}`;
}

document.getElementById('nextBtn').addEventListener('click', function () {
    const form = document.getElementById('quizForm');
    const answer = form.querySelector('input[name="answer"]:checked');
    if (answer) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            alert('Siz testni tugatdingiz!');
        }
    } else {
        alert('Iltimos, javobni tanlang.');
    }
});

document.getElementById('backBtn').addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
});

showQuestion(currentQuestionIndex);
