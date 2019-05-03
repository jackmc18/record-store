import recordApi from './record-api.js';

const albumTitle = document.getElementById('album-title');
const artistName = document.getElementById('artist-name');
const catalogNumber = document.getElementById('catalog-number');
const color = document.getElementById('color');
const rpm = document.getElementById('rpm');
const condition = document.getElementById('condition');
const jacketCondition = document.getElementById('jacket-condition');
const genre = document.getElementById('genre');
const rating = document.getElementById('rating-score');

const searchParams = new URLSearchParams(window.location.search);
const recordTitle = searchParams.get('albumTitle');

const record = recordApi.get(recordTitle);

if(!record.albumTitle) {
  window.location = './';
}
else {
  albumTitle.textContent = record.albumTitle;
  artistName.textContent = record.artistName;
  catalogNumber.textContent = record.catalogNumber;
  color.textContent = record.recordColor;
  rpm.textContent = record.recordRPM;
  condition.textContent = record.recordCondition;
  jacketCondition.textContent = record.jacketCondition;
  if(record.recordGenre) {
    genre.textContent = record.recordGenre.join(', ');
  }

  if(record.ratingDecision) {
    rating.textContent = record.ratingScore;
  }
  else {
    rating.textContent = 'none';
  }
}

