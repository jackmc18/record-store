import getRecordEntry from './get-record-entry.js';

const form = document.getElementById('record-entry');
const ratingScore = document.getElementById('rating-score');
const ratingDisplay = document.getElementById('rating-display');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  console.log(getRecordEntry(formData));
});

ratingScore.addEventListener('change', () => {
  ratingDisplay.textContent = ratingScore.value;
});
