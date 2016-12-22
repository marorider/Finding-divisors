function divisor () {
var s
var n1 = 
  document.getElementById('number');
if (n1 !== Number) {
  alert ('Podaj Liczbę!')
  } else {
  for (i=1; i<=n1; i++) {
    var n2 = n1 % i
    if (n2 == 0) {
      s += i + ", "
      }
  }
  alert('Dzielniki liczby ' + n1 + ' to:/n' + s)
 }
