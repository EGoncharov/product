module.exports = function multiply(first, second) {
  var numOne = first.split('').reverse();
  var numTwo = second.split('').reverse();
  var result = [];

  for (var i=0; numOne[i] >= 0; i++) {
  	for (var x=0; numTwo[x] >= 0; x++) {
  		if (!result[i+x]) {
  			result[i+x]=0;
  		}
  		result[i+x] += numOne[i]*numTwo[x];
  	}
  }
  for (var i=0; result[i] >= 0; i++) {
  	if (result[i] >= 10) {
  		if (!result[i+1]) {
  			result[i+1] = 0;
  		}
  		result[i+1] += parseInt(result[i]/10);
  		result[i] %= 10;
  	}
  }
  return result.reverse().join('');
}
