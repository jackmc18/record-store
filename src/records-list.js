import recordApi from './record-api.js';
import makeRecordRow from './make-record-row.js';

const tbody = document.getElementById('records');

const records = recordApi.getAll();

for(let i = 0; i < records.length; i++) {
  const record = records[i];
  const tr = document.createElement('tr');

  const titleCell = makeRecordRow.makeTitleCell(record.albumTitle);
  tr.appendChild(titleCell);

  const artistCell = makeRecordRow.makeTextCell(record.artistName);
  tr.appendChild(artistCell);

  const catalogNumCell = makeRecordRow.makeTextCell(record.catalogNumber);
  tr.appendChild(catalogNumCell);

  const colorCell = makeRecordRow.makeTextCell(record.recordColor);
  tr.appendChild(colorCell);

  const rmpCell = makeRecordRow.makeTextCell(record.recordRPM);
  tr.appendChild(rmpCell);

  const conditionCell = makeRecordRow.makeTextCell(record.recordCondition);
  tr.appendChild(conditionCell);

  const jacketCell = makeRecordRow.makeTextCell(record.jacketCondition);
  tr.appendChild(jacketCell);

  const genreCell = makeRecordRow.makeListCell(record.recordGenre);
  tr.appendChild(genreCell);

  const ratingCell = makeRecordRow.makeRatingCell(record.ratingScore);
  tr.appendChild(ratingCell);

  tbody.appendChild(tr);
}