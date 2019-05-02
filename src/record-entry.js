import makeRecordEntry from './make-record-entry.js';
import recordApi from './record-api.js';

const form = document.getElementById('record-entry');
const ratingScore = document.getElementById('rating-score');
const ratingDisplay = document.getElementById('rating-display');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const record = makeRecordEntry(formData);
  recordApi.save(record);
  console.log(record);
  window.location = '../record-entry-thanks.html';
});

ratingScore.addEventListener('change', () => {
  ratingDisplay.textContent = ratingScore.value;
});
