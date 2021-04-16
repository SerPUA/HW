let hh = prompt('hh');
let mm = prompt('mm');
let ss = prompt('ss');

function time(hh,mm,ss) {
   
   if (hh+mm+ss) {
      return "" + hh + ":" + mm + ":" + ss;   
   }
   else  if (hh + mm) {
      return "" + hh + ":" + mm + "00"
   } else if (hh) {
      return "" + hh + ":" + "00" + "00"
   } 
        
}
alert(time(hh,mm,ss))

