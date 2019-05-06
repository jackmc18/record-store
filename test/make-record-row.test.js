import makeRecordRow from '../src/make-record-row.js';

const test = QUnit.test;
QUnit.module('record row');

test('Test making a text cell', assert => {
  //Arrange
  // Set up your parameters and expectations
  const text = 'Hello World';
  const expected = '<td>Hello World</td>';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeRecordRow.makeTextCell(text).outerHTML;
  //Assert
  assert.deepEqual(result, expected);
});

test('Test making a list cell with two items', assert => {
  //Arrange
  // Set up your parameters and expectations
  const text = ['Rock', 'Funk/Soul'];
  const expected = '<td>Rock, Funk/Soul</td>';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeRecordRow.makeListCell(text).outerHTML;
  //Assert
  assert.deepEqual(result, expected);
});

test('Test making a rating cell', assert => {
  //Arrange
  // Set up your parameters and expectations
  const text = '10';
  const expected = '<td>10</td>';
  //Act 
  // Call the function you're testing and set the result to a const
  const result = makeRecordRow.makeRatingCell(text).outerHTML;
  //Assert
  assert.deepEqual(result, expected);
});


