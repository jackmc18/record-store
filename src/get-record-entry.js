function getRecordEntry(formData) {
  const willRate = formData.get('rating-decision') === 'yes';
  let score = NaN;

  if(willRate) {
    score = parseInt(formData.get('rating-score'));
  }

  const record = {
    albumTitle: formData.get('album-title'),
    artistName: formData.get('artist-name'),
    catalogNumber: formData.get('catalog-number'),
    recordColor: formData.get('color'),
    recordRPM: formData.get('rpm'),
    recordCondition: formData.get('condition'),
    recordGenre: formData.getAll('genre'),
    ratingDecision: willRate,
    ratingScore: score
  };
  return record;
}

export default getRecordEntry;