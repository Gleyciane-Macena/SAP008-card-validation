const validator= {
  maskify,isValid
}

function isValid (cNumber) {
  var sum = 0;

  while (cNumber > 0) {
    var a = cNumber % 10;
    cNumber = Math.floor(cNumber / 10);
    
    var b = (cNumber % 10) * 2;
    cNumber = Math.floor(cNumber / 10);
    
    if (b > 9) {
      b -= 9;
    }
    
    sum += a + b;
  }
  
  return sum % 10 == 0;
}
function maskify(ccNumber){
  return ccNumber.replace(/.(?=.{4})/g, "#")
}
export default validator