module.exports = function reverse (n) {
  var reverseArr = n.toString().split("").reverse();
  if(reverseArr[0]==0) reverseArr.shift();
  if(reverseArr[reverseArr.length-1] == "-") reverseArr.pop();
  return reverseArr.join("");
}
