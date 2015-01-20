// intersection : function (array) {
//       /* chop it up */
//       var args = [].slice.call(arguments);
//       /* reduce the arguments by using the first arrays values as
//       a cookie cutter to filter the common values found in each array
//       then reduce them */
//       return args.reduce(
//         function(array1, array2) {
//           var whoisleft = array1.filter( function(value) 
//           {
//             var workitout = (array2.some( function(current) 
//               {
//                 var their_kind = current === value;
//                 //console.log('current',current,'value',value,'ok>',their_kind);
//                 return their_kind;
//               }));
//             //console.log('Comparison ok?',workitout);
//             return workitout;
//           });
//           //console.log('-----Who is left?',whoisleft,'-----');
//           return whoisleft;
//         }
        
//       );
//     }

    var array1 = [1,2,3];
    var array2 = [5,2,1,4];
    var array3 = [2,1];

function intersection () {
    var array = arguments[0];
    var array2 = arguments[1];
    var combined = [];
  
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array2.length; j++){
        if(array[i] === array2[j]){
          combined.push(array[i]);
        }
      }
    }
   if(arguments.length === 2){
     return combined;
   }else {
     var computed = [combined];
     var remaining = arguments.splice(2,arguments.length - 1);
     var newArgs = computed.concat(remaining);
     return intersection.apply("this parameter doesn't matter", newArgs);
   }
  }


console.log(intersection());