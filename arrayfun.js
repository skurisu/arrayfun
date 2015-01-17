module.exports = {

  first : function (array, n) {
    if(n === undefined){
      return array[0];
    } else {
      return array.slice(0, 2);
    }
  }
};