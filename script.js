const quizData = [
    {
        question: "Какой класс относится к фракции Хранителей?",
        answers: ["Некромант", "Жрец", "Рыцарь Смерти", "Чернокнижник"],
        correct: 1
    },
    {
        question: "Как называется столица Легиона?",
        answers: ["Ирсельнорт", "Айвондиил", "Морктар", "Норланда"],
        correct: 2
    },
    {
        question: "Какая из этих фракций является враждебной Хранителям?",
        answers: ["Легион", "Первородные", "Горные Кланы", "Караваны"],
        correct: 0
    },
    {
        question: "Какой уровень требуется для вступления в гильдию?",
        answers: ["6", "10", "12", "5"],
        correct: 1
    },
    {
        question: "Как называется особое подземелье для героев 30 уровня?",
        answers: ["Гнездо дракона", "Тайная пещера", "Крепость Беренгара", "Чертоги Змея"],
        correct: 3
    },
    {
        question: "Какой ресурс нужен для усиления экипировки?",
        answers: ["Камень улучшения", "Катализатор", "Сфера усиления", "Эликсир могущества"],
        correct: 2
    },
    {
        question: "Как можно получить новые навыки?",
        answers: ["Купить у торговца", "Использовать книги навыков", "Поднять уровень", "Открыть сундук"],
        correct: 1
    },
    {
        question: "Что дает гильдия своим участникам?",
        answers: ["Дополнительные характеристики", "Доступ к подземельям", "Бесплатное снаряжение", "Золото"],
        correct: 0
    },
    {
        question: "Как называется PvP-режим на арене?",
        answers: ["Захват флага", "Дуэль", "Битва кланов", "Арена славы"],
        correct: 3
    },
    {
        question: "Какой босс обитает в Крепости Беренгара?",
        answers: ["Демонолог", "Лорд Дракон", "Тёмный Магистр", "Король Горы"],
        correct: 2
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizContainer.innerHTML = "";
    quizData.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.textContent = `${index + 1}. ${q.question}`;

        const answersElement = document.createElement("div");
        answersElement.classList.add("answers");

        q.answers.forEach((answer, i) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="question${index}" value="${i}"> ${answer}`;
            answersElement.appendChild(label);
        });

        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(answersElement);
    });
}

submitButton.addEventListener("click", () => {
    let score = 0;

    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });

    resultContainer.textContent = `Вы правильно ответили на ${score} из 10 вопросов!`;
});

loadQuiz();