var testArray= [];
for (var i = 0; i <= 10; i ++){
  testArray.push(i);// agrega de uno en uno elementos al arreglo
}
console.log(testArray);

//eliminar el primer elemento del arreglo
testArray.shift();
console.log(testArray);

//eliminar ultimo elemento del arreglo
testArray.pop();
console.log(testArray);

//revertir los elementos del arreglo
testArray.reverse();
console.log(testArray);

/* ---------------- */
var testString = "abcde";
testString.charAt(2);
console.log(testString);
/* para obtener un caracter a partir de su codigo ascci utilizo el método String.fromCharCode() */
var codigo = testString.charCodeAt(2);
console.log(codigo);
string.fromCharCode(codigo);
