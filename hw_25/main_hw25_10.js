function time(s) {
let resSec = s % 60;
let resMin = Math.floor (s % 3600 / 60);
let  = Math.floor (s / 3600);

return (`${resHour} : ${resMin} : ${resSec}`)
}
alert