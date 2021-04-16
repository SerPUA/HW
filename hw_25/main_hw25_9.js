let ss = +prompt('ss');

function reversss(ss) {
  let hh = ss / 3600;
  let mm = (ss - (ss / 3600)) / 60;
  
  return "" + hh + ":" + mm + ":" + ss
}
alert(reversss(ss))