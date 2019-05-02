import makeRecordEntry from '../src/make-record-entry.js';

const test = QUnit.test;
QUnit.module('record entry');

test('Test a normal record entry and expect the formated version', assert => {
  //Arrange
  // Set up your parameters and expectations
  const expected = {
    albumTitle: 'Where Will We Go Part 1 & 2',
    artistName: 'Nick Hakim',
    catalogNumber: 'ATO0375',
    recordColor: 'Milky White',
    recordRPM: '33 1/3',
    recordCondition: 'Excellent',
    jacketCondition: 'There is a small crease in the top left corner.',
    recordGenre: ['Electronic', 'Funk/Soul'],
    ratingDecision: true,
    ratingScore: 9
  };

  const formData = new FormData();
  formData.set('album-title', expected.albumTitle);
  formData.set('artist-name', expected.artistName);
  formData.set('catalog-number', expected.catalogNumber);
  formData.set('color', expected.recordColor);
  formData.set('rpm', expected.recordRPM);
  formData.set('condition', expected.recordCondition);
  formData.set('jacket-condition', expected.jacketCondition);
  formData.set('genre', expected.recordGenre[0]);
  formData.append('genre', expected.recordGenre[1]);
  formData.set('rating-decision', 'yes');
  formData.set('rating-score', '9');
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeRecordEntry(formData);
  //Assert
  assert.deepEqual(result, expected);
});

test('Test a normal record entry with no rating expect no ratingScore property', assert => {
  //Arrange
  // Set up your parameters and expectations
  const expected = {
    albumTitle: 'Where Will We Go Part 1 & 2',
    artistName: 'Nick Hakim',
    catalogNumber: 'ATO0375',
    recordColor: 'Milky White',
    recordRPM: '33 1/3',
    recordCondition: 'Excellent',
    jacketCondition: 'There is a small crease in the top left corner.',
    recordGenre: ['Electronic', 'Funk/Soul'],
    ratingDecision: false
  };

  const formData = new FormData();
  formData.set('album-title', expected.albumTitle);
  formData.set('artist-name', expected.artistName);
  formData.set('catalog-number', expected.catalogNumber);
  formData.set('color', expected.recordColor);
  formData.set('rpm', expected.recordRPM);
  formData.set('condition', expected.recordCondition);
  formData.set('jacket-condition', expected.jacketCondition);
  formData.set('genre', expected.recordGenre[0]);
  formData.append('genre', expected.recordGenre[1]);
  formData.set('rating-decision', 'no');
  formData.set('rating-score', '5');
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeRecordEntry(formData);
  //Assert
  assert.deepEqual(result, expected);
});