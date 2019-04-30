import recordApi from '../src/record-api.js';

const test = QUnit.test;
QUnit.module('record api');

test('Test a normal record entry with no rating expect no ratingScore property', assert => {
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