function getRecordEntry(formData) {
  const willRate = formData.get('rating-decision') === 'yes';

  const record = {
    albumTitle: formData.get('album-title'),
    artistName: formData.get('artist-name'),
    catalogNumber: formData.get('catalog-number'),
    recordColor: formData.get('color'),
    recordRPM: formData.get('rpm'),
    recordCondition: formData.get('condition'),
    jacketCondition: formData.get('jacket-condition'),
    recordGenre: formData.getAll('genre'),
    ratingDecision: willRate
  };

  if(willRate) {
    let score = parseInt(formData.get('rating-score'));
    record.ratingScore = score;
  }

  return record;
}

export default getRecordEntry;