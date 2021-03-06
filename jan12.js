// Ramp Numbers
//
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// **Input**
//
// A positive integer, n.
//
// **Output**
//
// true if the input is a ramp number, false if it is not
'use strict';
function rampNum(n){
  if(isNaN(n)){
    return false;
  }
  var stringN = n.toString();
  for (var i = 0; i < stringN.length-1; i++) {
    // console.log(stringN[i]);
    // console.log(stringN[i+1]);
    if(stringN[i] > stringN[i+1]){
      return false;
    }
  }
  return true;
}

module.exports = rampNum;
//export fxn
