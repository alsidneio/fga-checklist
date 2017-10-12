
//Getting the full  day & date to display -------------------------------------
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // Make January start off at 1
var yyyy = today.getFullYear();
var day = today.getDay()+1; // make Sunday start off at 1 

var dayName=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var month=["","January","February","March","April","May","June","July","August","September","October","November","December"];

today = month[mm] + " " + dd + ', ' + yyyy;
$("#dayDisplay").append(dayName[day]); 
$("#dateDisplay").append(today);

//-----------------------------------------------------------------------------

