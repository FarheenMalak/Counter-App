// Get the elements
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const countDisplay = document.getElementById('count');

// Initialize counter value
let count = 0;

// Update the counter display
function updateCounter() {
  countDisplay.textContent = count;
}

// Event listeners
incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  if (count > 0) {
    count--;
  }
  updateCounter();
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateCounter();
});
