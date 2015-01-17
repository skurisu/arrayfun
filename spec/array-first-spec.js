var arrayfun = require('../arrayfun');

describe("arrayfun", function() {
  it("Returns the first element of the array", function() {
    var test_array = ['a','b','c'];

    var result = arrayfun.first(test_array);

    expect(result).toBe('a');

  });

  it("Returns the first and second element of test_array in a NEW array", function() {
    var test_array = ['a','b','c'];
    
    var result2 = arrayfun.first(test_array,2);

    expect(result2).toEqual(['a','b']);
  });
});