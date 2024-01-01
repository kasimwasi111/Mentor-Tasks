const questionDesc = document.getElementById("question");
const optionsBtn = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

let currentQueIndex = 0;
let score = 0;

async function startQuiz() {
  try {
    const response = await fetch("./questions.json");
    const data = await response.json();
    // if (!Array.isArray(data)) {
    //   throw new Error("Invalid data format");
    // }
    questions = data;
    currentQueIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    displayQuiz();
  } catch (error) {
    console.error("Error fetching or parsing questions:", error.message);
  }
}

function displayQuiz() {
  resetState();
  let currentQuestion = questions[currentQueIndex];
  let questionNo = currentQueIndex + 1;
  questionDesc.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerHTML = option.op + ". " + option.text;
    button.classList.add("btn");
    optionsBtn.appendChild(button);
    if (option.correct) {
      button.dataset.correct = option.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (optionsBtn.firstChild) {
    optionsBtn.removeChild(optionsBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selelctedBtn = e.target;
  const isCorrect = selelctedBtn.dataset.correct === "true";
  if (isCorrect) {
    score++;
    selelctedBtn.classList.add("correct");
  } else {
    selelctedBtn.classList.add("incorrect");
  }
  Array.from(optionsBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function handleNextButton() {
  currentQueIndex++;
  if (currentQueIndex < questions.length) {
    displayQuiz();
  } else {
    displayScore();
  }
}

function displayScore() {
  resetState();
  questionDesc.innerHTML = `You scored ${score * 10} out of ${
    questions.length * 10
  }!`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}
nextBtn.addEventListener("click", () => {
  if (currentQueIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
