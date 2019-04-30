const form = document.getElementById('record-entry');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit form');
});

