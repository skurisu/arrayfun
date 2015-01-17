var arrayfun = require('../arrayfun');

describe("arrayfun-max", function() {
  it("Retreieve the max value of the collection", function() {
    var test_array = [4,2,8,6];

    var result = arrayfun.max(test_array);

    expect(result).toBe(8);
  });

  it("Return -Infinity if the collection is empty or falsey", function() {
    var test_array = [ ];

    var result = arrayfun.max(test_array);

    expect(result).toBe(-Infinity);
  });
});