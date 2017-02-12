var n = prompt('Какое число?', 0);
var d = prompt('В какую степень возвести?', 0);

function calculate(n, d) {
  var result = n;
  if (d == 0) {
   result = 1;
  return result;
  }
	for (var i=1; i<d; i++) {

		result = result*n;
		
	}

	return result;
}

if (n%1!=0) {
	alert ('введите целое число');
	n = 0;
}
if (d%1!=0) {
	alert ('введите целое число');
	d = 0;
}
console.log( 'result='+calculate(n,d));











	
 
