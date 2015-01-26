function intersection (array,array2) {
  var testArray1 = [1,2,3];
  var testArray2 = [5,2,1,4];
  var combined = [];
  
  for(var i = 0; i < testArray1.length; i++){
    for(var j = 0; j < testArray2.length; j++){
       console.log(testArray1[i],testArray2[j]);
      // if(array[i] === array2[j]){
      //   combined.push(array[i]);
      // }
    }
  }

  // for (var i = 0; i < testArray1.length; i++) {
  //   console.log(testArray1[i],testArray2[i]);
  // };
}

intersection(testArray1,testArray2);