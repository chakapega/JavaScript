var arr1 = [69,'Solomun',true,undefined,NaN,'96'];

function toStringAndReverse(elem) {
  var reverseElem = '';
  elem += '';
  
  for (var i = elem.length - 1; i >= 0; i--) {
    reverseElem += elem[i];
  }
  return reverseElem;
}




function myForEach(arr,func) {
  var resultArray = [];

  for (var i = 0; i < arr.length; i++) {
    resultArray.push(func(arr[i]));
  }
  return resultArray;
}


console.log(myForEach(arr1,toStringAndReverse));
