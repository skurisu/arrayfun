module.exports = {

  first : function (array, n) {
    if(n === undefined){
      return array[0];
    } else {
      return array.slice(0, 2);
    }
  },

  max : function (array) {
   var something = 0;
    if (array === undefined || array === false ) {
      return -Infinity;
    } else {
      return Math.max.apply(null, array);
    }
  }
};
   