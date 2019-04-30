import getRecordEntry from './get-record-entry.js';

const form = document.getElementById('record-entry');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  console.log(getRecordEntry(formData));
});

