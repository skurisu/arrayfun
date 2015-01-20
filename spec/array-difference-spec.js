var arrayfun = require('../arrayfun');

describe("array-difference", function() {
  it("Creates an array excluding all values of the provided arrays", function() {
    var testArray = [1,2,3,4,5];
    var testArray2 = [5,2,10];

    var result = arrayfun.difference(testArray,testArray2);

    expect(result).toEqual([1,3,4]);

  });

  it("Creates an array excluding all values of the provided arrays", function() {
    var testArray = [1,2,3,4,5];
    var testArray2 = [1,2,3,5,10];
    
    var result2 = arrayfun.first(testArray,testArray2);

    expect(result2).toEqual([4]);
  });
});