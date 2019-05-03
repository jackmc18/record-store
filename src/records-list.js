import recordApi from './record-api.js';

const tbody = document.getElementById('records');

const records = recordApi.getAll();

for(let i = 0; i < records.length; i++) {
  const record = records[i];
  const tr = document.createElement('tr');

  const link = document.createElement('a');

  const searchParams = new URLSearchParams();
  searchParams.set('name', record.albumTitle);
  link.textContent = record.albumTitle;
  link.href = 'record-detail.html?' + searchParams.toString();

  const titleCell = document.createElement('td');
  titleCell.appendChild(link);
  tr.appendChild(titleCell);

  const artistCell = document.createElement('td');
  artistCell.textContent = record.artistName;
  tr.appendChild(artistCell);

  const catalogNumCell = document.createElement('td');
  catalogNumCell.textContent = record.catalogNumber;
  tr.appendChild(catalogNumCell);

  const colorCell = document.createElement('td');
  colorCell.textContent = record.recordColor;
  tr.appendChild(colorCell);

  const rmpCell = document.createElement('td');
  rmpCell.textContent = record.recordRPM;
  tr.appendChild(rmpCell);

  const conditionCell = document.createElement('td');
  conditionCell.textContent = record.recordCondition;
  tr.appendChild(conditionCell);

  const jacketCell = document.createElement('td');
  jacketCell.textContent = record.jacketCondition;
  tr.appendChild(jacketCell);

  const genreCell = document.createElement('td');
  let genreList = '';
  if(record.recordGenre) {
    genreList = record.recordGenre.join(', ');
  }
  genreCell.textContent = genreList;
  tr.appendChild(genreCell);

  const ratingCell = document.createElement('td');
  let rating = '';
  if(record.ratingScore) {
    rating = record.ratingScore;
  } else {
    rating = 'none';
  }
  ratingCell.textContent = rating;
  tr.appendChild(ratingCell);

  tbody.appendChild(tr);
}