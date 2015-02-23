var arrayfun = require('../arrayfun');

describe("arrayfun-unique", function() {
  it("Retreieves the unique values of the collection", function() {
    var test_array = [1,2,1,3];

    var result = arrayfun.uniq(test_array);

    expect(result).toEqual([2,3]);
  });
});