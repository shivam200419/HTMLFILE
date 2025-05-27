function refreshScore() {
  const newScore = Math.floor(Math.random() * 100) + 700; // Simulate a new score
  document.getElementById("credit-score").textContent = newScore;
  alert("Credit score refreshed!");
}

function checkBalance() {
  alert("Fetching bank balance... (mocked)");
}