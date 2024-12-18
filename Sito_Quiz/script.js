const welcomeScreen = document.getElementById('welcomeScreen');
const quizContainer = document.getElementById('quizContainer');
const startButton = document.getElementById('startButton');
const timerElement = document.getElementById('timer');
const quizForm = document.getElementById('quizForm');
const resultsContainer = document.getElementById('results');

//definizione variabile timer
let totalTime = 3 * 60; 
let timerInterval;

//definizione risposte corrette
const correctAnswers = {
    q1: "John McCarthy",
    q2: "Artificial Intelligence",
    q3: "Statistical Models",
    q4: "Python"
};

//evento bottone start
startButton.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        alert("Inserire nome e email prima di iniziare!.");
        return;
    }

    //nasconde schermata di benvenuto e inizia quiz
    welcomeScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');

    //parte time
    timerInterval = setInterval(() => {
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        timerElement.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        totalTime--;
        //se tempo scade consegnare quiz
        if (totalTime < 0) {
            clearInterval(timerInterval);
            quizForm.submit();
        }
    }, 1000);
});

//evento submit del test
quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    clearInterval(timerInterval);

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const formData = new FormData(quizForm);
    let score = 0;
    let results = `Quiz Results\nName: ${name}\nEmail: ${email}\n\n`;

    //calcolo dei risultati 
    formData.forEach((value, key) => {
        results += `${key}: ${value}\n`;
        if (correctAnswers[key] === value) {
            score++;
        }
    });

    //usa risultati per calcolare voto
    results += `\nVoto: ${score} / 4`;

    //stampa risultati
    resultsContainer.textContent = results;
    resultsContainer.classList.remove('hidden');

    //scarica risultati
    const blob = new Blob([results], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "quiz_results.txt";
    link.textContent = "Scarica risultati";

    resultsContainer.appendChild(document.createElement("br"));
    resultsContainer.appendChild(link);
});