var a =prompt('Podaj liczbe');
var b =prompt('Podaj liczbe');
var value = (a*a) + (2 * a * b) - (b*b);
if (value<0) {
	console.log('Liczba jest ujemna');
}
else if (value>0) {
	console.log('Liczba jest dodatnia');
}
(value==0)?
	console.log('Wynik jwst równy zero!'):console.log('Wynik nie jest równy zero!');

	console.log('Liczba wynosi:'+value);
	alert('Liczba wynosi:'+value);
