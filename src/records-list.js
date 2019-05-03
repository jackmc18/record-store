import recordApi from './record-api.js';

const tbody = document.getElementById('records');

const records = recordApi.getAll();

for(let i = 0; i < records.length; i++) {
  const record = records[i];
  const tr = document.createElement('tr');

  const titleCell = makeTitleCell(record.albumTitle);
  tr.appendChild(titleCell);

  const artistCell = makeTextCell(record.artistName);
  tr.appendChild(artistCell);

  const catalogNumCell = makeTextCell(record.catalogNumber);
  tr.appendChild(catalogNumCell);

  const colorCell = makeTextCell(record.recordColor);
  tr.appendChild(colorCell);

  const rmpCell = makeTextCell(record.recordRPM);
  tr.appendChild(rmpCell);

  const conditionCell = makeTextCell(record.recordCondition);
  tr.appendChild(conditionCell);

  const jacketCell = makeTextCell(record.jacketCondition);
  tr.appendChild(jacketCell);

  const genreCell = makeListCell(record.recordGenre);
  tr.appendChild(genreCell);

  const ratingCell = makeRatingCell(record.ratingScore);
  tr.appendChild(ratingCell);

  tbody.appendChild(tr);
}

function makeListCell(list) {
  let listString = '';
  if(list) {
    listString = list.join(', ');
  }
  return makeTextCell(listString);
}

function makeRatingCell(rating) {
  let ratingString = '';
  if(rating) {
    ratingString = rating;
  } else {
    ratingString = 'none';
  }
  return makeTextCell(ratingString);
}

function makeTitleCell(albumTitle) {
  const link = document.createElement('a');
  const searchParams = new URLSearchParams();
  searchParams.set('albumTitle', albumTitle);
  link.textContent = albumTitle;
  link.href = 'record-detail.html?' + searchParams.toString();

  const titleCell = document.createElement('td');
  titleCell.appendChild(link);
  return titleCell;
}

function makeTextCell(text) {
  const textCell = document.createElement('td');
  textCell.textContent = text;
  return textCell;
}