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
  }
};
   