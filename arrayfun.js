module.exports = {

  first : function (array, n) {
    if(n === undefined){
      return array[0];
    } else {
      return array.slice(0, 2);
    }
  },

  max : function (array) {
    if (!array || array.length === 0) {
    // if (array === undefined || array === false ) {
      return -Infinity;
    } else {
      return Math.max.apply(Math, array);
    }
  },

  min : function (array) {
    if (!array || array.length === 0) {
    // if (array === undefined || array === false ) {
      return Infinity;
    } else {
      return Math.min.apply(Math, array);
    }
  },

  intersection : function () {
    var result = [];
    var foundKey = false;
 
    // for every value in first array passed into this function
    // we will treat it as our keys
    for (var i = 0; i < arguments[0].length; i++) {
 
      var key = arguments[0][i];
      // console.log("what Im looking for: ", key);
 
      for (var j = 1; j < arguments.length; j++) {
 
        var indexOfKey = arguments[j].indexOf(key);
        // console.log("Haystack: " + arguments[j]);
 
        // indexOf returns -1 means the key is not in the array
        if (indexOfKey !== -1) {
          // console.log("number found at: " + arguments[j].indexOf(key));
          foundKey = true;
        } else {
          foundKey = false;
          break;
        }
        if (j === arguments.length -1 && foundKey) {
          result.push(key);
        }
      }
    }
 
    // removing duplicate values in the results[]
    for(var k = 1; k < result.length; k++) {
      var currentValueAtIndex = result[k];
      var isFound = result.indexOf(currentValueAtIndex);
 
      if (isFound !== k) {
        result.splice(k, 1);
        k--;
      }
    }
 
    return result;

  }
};
