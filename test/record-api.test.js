import recordApi from '../src/record-api.js';

const test = QUnit.test;
QUnit.module('record api');

test('Test saving and getting a single record', assert => {
  localStorage.removeItem('records');
  //Arrange
  // Set up your parameters and expectations
  const record = { artistName: 'Nick Hakim' };
  //Act 
  // Call the function you're testing and set the result to a const
  recordApi.save(record);
  const result = recordApi.get();
  //Assert
  assert.deepEqual(result, record);
});

test('Test for nothing stored get an empty array back', assert => {
  localStorage.removeItem('records');
  //Arrange
  // Set up your parameters and expectations
  const expected = [];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = recordApi.getAll();
  //Assert
  assert.deepEqual(result, expected);
});