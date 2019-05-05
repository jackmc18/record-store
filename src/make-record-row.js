function makeListCell(list) {
  let listString = '';
  console.log(list);
  if(list) {
    listString = list.join(', ');
  }
  console.log(listString);
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

const makeRecordRow = {
  makeListCell,
  makeRatingCell,
  makeTitleCell,
  makeTextCell
};

export default makeRecordRow;