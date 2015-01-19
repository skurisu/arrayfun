var arrayfun = require('../arrayfun');

describe("arrayfun-min", function() {
  it("Retreieve the min value of the collection", function() {
    var test_array = [4,2,8,6];

    var result = arrayfun.min(test_array);

    expect(result).toBe(2);
  });

  it("Return Infinity if the collection is empty or falsey", function() {
    var test_array = [ ];

    var result = arrayfun.min(test_array);

    expect(result).toBe(Infinity);
  });
});