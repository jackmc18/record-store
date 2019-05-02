import recordApi from '../src/record-api.js';

const test = QUnit.test;
QUnit.module('record api');

recordApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('Test saving and getting a single record', assert => {
  testStorage.removeItem('records');
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
  testStorage.removeItem('records');
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
  testStorage.removeItem('records');
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