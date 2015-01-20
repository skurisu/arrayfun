var arrayfun = require('../arrayfun');

describe("arrayfun-intersection", function() {
  it("Creates an array of unique values present in all provided arrays (using strict equality for comparisons)", function() {
    var testArray1 = [1,2,3];
    var testArray2 = [5,2,1,4];
    var testArray3 = [2,1];

    var result = arrayfun.intersection(testArray1,testArray2,testArray3);

    expect(result).toEqual([1,2]);
  });

  it("Creates an array of unique values present in all provided arrays", function() {
    var testArray1 = [2,3,4];
    var testArray2 = [5,2];

    var result = arrayfun.intersection(testArray1,testArray2);

    expect(result).toEqual([2]);
  });
});