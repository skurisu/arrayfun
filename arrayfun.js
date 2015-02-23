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

  intersection : function (array,array2) {
    var combined = [];
  
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array2.length; j++){
        if(array[i] === array2[j]){
          combined.push(array[i]);
        }
      }
    }
    return combined;
  },
  //   var result = [];
  //   var foundKey = false;
 
  //   // for every value in first array passed into this function
  //   // we will treat it as our keys
  //   for (var i = 0; i < arguments[0].length; i++) {
 
  //     var key = arguments[0][i];
  //     // console.log("what Im looking for: ", key);
 
  //     for (var j = 1; j < arguments.length; j++) {
 
  //       var indexOfKey = arguments[j].indexOf(key);
  //       // console.log("Haystack: " + arguments[j]);
 
  //       // indexOf returns -1 means the key is not in the array
  //       if (indexOfKey !== -1) {
  //         // console.log("number found at: " + arguments[j].indexOf(key));
  //         foundKey = true;
  //       } else {
  //         foundKey = false;
  //         break;
  //       }
  //       if (j === arguments.length -1 && foundKey) {
  //         result.push(key);
  //       }
  //     }
  //   }
 
  //   // removing duplicate values in the results[]
  //   for(var k = 1; k < result.length; k++) {
  //     var currentValueAtIndex = result[k];
  //     var isFound = result.indexOf(currentValueAtIndex);
 
  //     if (isFound !== k) {
  //       result.splice(k, 1);
  //       k--;
  //     }
  //   }
 
  //   return result;

      /* chop it up */
    //   var args = [].slice.call(arguments);
    //   /* reduce the arguments by using the first arrays values as
    //   a cookie cutter to filter the common values found in each array
    //   then reduce them */
    //   return args.reduce(
    //     function(array1, array2) {
    //       var whoisleft = array1.filter( function(value) 
    //       {
    //         var workitout = (array2.some( function(current) 
    //           {
    //             var their_kind = current === value;
    //             console.log('current',current,'value',value,'ok>',their_kind);
    //             return their_kind;
    //           }));
    //         console.log('Comparison ok?',workitout);
    //         return workitout;
    //       });
    //       console.log('-----Who is left?',whoisleft,'-----');
    //       return whoisleft;
    //     }
        
    //   );
    // },

  uniq : function (array) {
    
    var newArray = [];
    var unique = {};
    var ok = "";
  
    for(var i = 0; i < array.length; i++) {
      if(unique.hasOwnProperty(array[i])){
        unique[array[i]]++;
      }
      else {
        unique[array[i]] = 1;
      }
    }

    for (var key in unique) {
      if(unique[key] === 1) {
      ok = parseInt(key);
        newArray.push(ok);
      }
    }
    return newArray;
    
  },

//   uniq: function (array) {
//   for(var i = 0; i < array.length; i++) {
//     if(unique.hasOwnProperty(array[i])){
//       unique[array[i]]++;
//     }
//     else {
//       unique[array[i]] = 1;
//     }
//   }
//   return Object.keys(unique);
// }

  difference : function (array,array2) {
  
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array2.length; j++){
        if(array[i] === array2[j]){
          array.splice(i, 1);
        }
      }
    }
    return array;


  },

  contains : function (array,target) {
    if(array.indexOf(target) === -1){
      return false;
    } else{
      return true;
    }
  }
};
