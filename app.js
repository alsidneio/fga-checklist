
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
var task=$("#task").val();
$("input").keypress(function(e) {    //Listening for the ENTER key on the input field
    if(e.which == 13) { 
    console.log(task); 
    return task;
    }
    
   // $("<h3>"+task+"</h3>").appendTo(".list");
});

