import recordApi from './record-api.js';
import makeRecordRow from './make-record-row.js';

const tbody = document.getElementById('records');

const records = recordApi.getAll();

for(let i = 0; i < records.length; i++) {
  const record = records[i];
  const tr = document.createElement('tr');

  const titleCell = makeRecordRow.makeTitleCell(record.albumTitle);
  const artistCell = makeRecordRow.makeTextCell(record.artistName);
  const catalogNumCell = makeRecordRow.makeTextCell(record.catalogNumber);
  const colorCell = makeRecordRow.makeTextCell(record.recordColor);
  const rmpCell = makeRecordRow.makeTextCell(record.recordRPM);
  const conditionCell = makeRecordRow.makeTextCell(record.recordCondition);
  const jacketCell = makeRecordRow.makeTextCell(record.jacketCondition);
  const genreCell = makeRecordRow.makeListCell(record.recordGenre);
  const ratingCell = makeRecordRow.makeRatingCell(record.ratingScore);

  tr.appendChild(titleCell);
  tr.appendChild(artistCell);
  tr.appendChild(catalogNumCell);
  tr.appendChild(colorCell);
  tr.appendChild(rmpCell);
  tr.appendChild(conditionCell);
  tr.appendChild(jacketCell);
  tr.appendChild(genreCell);
  tr.appendChild(ratingCell);

  tbody.appendChild(tr);
}