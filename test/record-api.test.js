import recordApi from '../src/record-api.js';

const test = QUnit.test;
QUnit.module('record api');

const key = 'test-records';
recordApi.key = key;

test('Test saving two records and get the second one back', assert => {
  localStorage.removeItem(key);
  //Arrange
  // Set up your parameters and expectations
  const record1 = { albumTitle: 'Where Will We Go Part 1 & 2' };
  const record2 = { albumTitle: 'Wolfmother' };
  recordApi.save(record1);
  recordApi.save(record2);
  //Act 
  // Call the function you're testing and set the result to a const
  const result = recordApi.get(record2.albumTitle);
  //Assert
  assert.deepEqual(result, record2);
});

test('Test for nothing stored get an empty array back', assert => {
  localStorage.removeItem(key);
  //Arrange
  // Set up your parameters and expectations
  const expected = [];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = recordApi.getAll();
  //Assert
  assert.deepEqual(result, expected);
});

test('Test 2 records in storage return 2 records', assert => {
  localStorage.removeItem(key);
  //Arrange
  // Set up your parameters and expectations
  const record1 = { record: 'Wish You Were Here' };
  const record2 = { record: 'Dark Side Of The Moon' };
  recordApi.save(record1);
  recordApi.save(record2);
  const expected = [record1, record2];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = recordApi.getAll();
  //Assert
  assert.deepEqual(result, expected);
});