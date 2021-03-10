var todayDisplay = moment().format('dddd[ - ] MMMM Do[,] YYYY');
console.log(todayDisplay)
$("#currentDay").text(todayDisplay);

var currentTime = parseInt(moment().format('hh'));