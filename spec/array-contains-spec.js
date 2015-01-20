var arrayfun = require('../arrayfun');

describe("array-contains", function() {
  it("Checks if a given value is present in a collection", function() {
    var testArray = [1,2,3];
    var target = 1;

    var result = arrayfun.contains(testArray,target);

    expect(result).toBe(true);

  });

  it("Checks if a given value is present in a collection, return false", function() {
    var testArray = [1,2,3];
    var target = 44;
    
    var result2 = arrayfun.contains(testArray,target);

    expect(result2).toBe(false);
  });
});