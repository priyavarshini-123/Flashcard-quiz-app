let flashcards = [
  { question: "What is JavaScript?", answer: "A programming language for the web." },
  { question: "What is HTML?", answer: "A markup language for creating web pages." },
  { question: "What is CSS?", answer: "A language for styling web pages." }
];

let currentIndex = 0;
let showingAnswer = false;

function updateCard() {
  const cardText = document.getElementById("card-text");
  const flipBtn = document.getElementById("flipBtn");

  if (flashcards.length === 0) {
    cardText.innerText = "No flashcards available.";
    flipBtn.disabled = true;
    return;
  }

  showingAnswer = false;
  cardText.innerText = flashcards[currentIndex].question;
  flipBtn.innerText = "Show Answer";
  flipBtn.disabled = false;
}

function flipCard() {
  const cardText = document.getElementById("card-text");
  const flipBtn = document.getElementById("flipBtn");

  if (showingAnswer) {
    cardText.innerText = flashcards[currentIndex].question;
    flipBtn.innerText = "Show Answer";
  } else {
    cardText.innerText = flashcards[currentIndex].answer;
    flipBtn.innerText = "Show Question";
  }
  showingAnswer = !showingAnswer;
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    updateCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCard();
  }
}

function addCard() {
  const question = prompt("Enter the question:");
  if (question) {
    const answer = prompt("Enter the answer:");
    if (answer) {
      flashcards.push({ question, answer });
      currentIndex = flashcards.length - 1;
      updateCard();
    }
  }
}

function editCard() {
  if (flashcards.length === 0) return;

  const current = flashcards[currentIndex];
  const question = prompt("Edit the question:", current.question);
  if (question !== null) {
    const answer = prompt("Edit the answer:", current.answer);
    if (answer !== null) {
      flashcards[currentIndex] = { question, answer };
      updateCard();
    }
  }
}

function deleteCard() {
  if (flashcards.length === 0) return;
  if (confirm("Are you sure you want to delete this flashcard?")) {
    flashcards.splice(currentIndex, 1);
    currentIndex = Math.max(0, currentIndex - 1);
    updateCard();
  }
}

// Initialize on load
window.onload = updateCard;
