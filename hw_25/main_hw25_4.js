let a = +prompt("first");
let b = +prompt("second");
function geometr(a, b = a) {
 
  return a * b;
  // return (a || b !== 0 && undefined) ? a*b : a*a || b*b;
  //
  // a || b
}
if (b) alert(geometr(a, b));
else alert (geometr (a))

