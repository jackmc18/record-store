import makeRecordRow from '../src/make-record-row.js';

const test = QUnit.test;
QUnit.module('record api');

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