import getRecordEntry from './get-record-entry.js';
import recordApi from './record-api.js';

const form = document.getElementById('record-entry');
const ratingScore = document.getElementById('rating-score');
const ratingDisplay = document.getElementById('rating-display');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const record = getRecordEntry(formData);
  recordApi.save(record);
  console.log(record);
});

ratingScore.addEventListener('change', () => {
  ratingDisplay.textContent = ratingScore.value;
});
