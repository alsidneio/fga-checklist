
//Getting the full  day & date to display -------------------------------------
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; // Make January start off at 1
var yyyy = today.getFullYear();
var day = today.getDay()+1; // make Sunday start off at 1 

var dayName=["","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var month=["","January","February","March","April","May","June","July","August","September","October","November","December"];

today = month[mm] + " " + dd + ', ' + yyyy;
document.getElementById("dayDisplay").innerHTML= dayName[day];
document.getElementById("dateDisplay").innerHTML= today;
//-----------------------------------------------------------------------------
var i=1;
function saveTask(e){
    var task=document.getElementById("task").value; //get the value stored in the input 
    var container=document.createElement("div"); //create the list element 
    var listItem=document.createElement("div");
    var status=document.createElement("a");
    
    document.getElementById("list-space").appendChild(container); //atttach li element to ul element 
    container.setAttribute("id","container-"+i);
    container.setAttribute("class","container");
    document.getElementById("container-"+i).appendChild(listItem);
    listItem.className="item";
    listItem.appendChild(document.createTextNode(task));
    document.getElementById("container-"+i).appendChild(status)
    status.className="status";
    status.setAttribute("id","status-"+i)
    status.appendChild(document.createTextNode("COMPLETE"));
    i++
}

document.addEventListener("click",function(e){
    if(e.target.textContent=="DELETE"){
        var specificId=e.target.id;
        var clickDiv= document.getElementById(specificId);
        clickDiv.parentElement.remove(); 
    }
    
    if(e.target.className=="status"){
        var specificId=e.target.id; //get id of specif target clicked
        var clickDiv= document.getElementById(specificId); //get the element with target ID 
        clickDiv.textContent="DELETE"; //set the text node to DELETE
        clickDiv.style.color="red";
        clickDiv.parentElement.firstChild.className+=" strikeThrough";   
    }
   

    if(e.target.id=="active"){
        document.getElementById("active").className+=" highlight";
        var deleted =document.getElementsByClassName("status");
        for(var j=0; j<deleted.length; j++){
            if(deleted[j].textContent=="DELETE"){
                deleted[j].parentElement.className="hide";
            }
            if(deleted[j].textContent=="COMPLETE"){
                deleted[j].parentElement.className="container";
            }
        }      
    }

    if(e.target.id=="complete"){
        var active =document.getElementsByClassName("status");
        for(var j=0; j<active.length; j++){
            if(active[j].textContent=="COMPLETE"){
                active[j].parentElement.className="hide";
            }
            if(active[j].textContent=="DELETE"){
                active[j].parentElement.className="container";
            }
        }      
    }
    if(e.target.id=="all"){
        
        var all =document.getElementsByClassName("status");
        for(var j=0; j<all.length; j++){
         all[j].parentElement.className="container";            
        }      
    }

    if(e.target.id=="comp-all"){
        
        var all =document.getElementsByClassName("status");
        for(var j=0; j<all.length; j++){
            all[j].textContent="DELETE";
            all[j].style.color="red";
            all[j].parentElement.firstChild.className+=" strikeThrough";           
           }  
    }

    if(e.target.id=="del-all"){
        
        var clearList=document.getElementsByClassName("container");
        while(clearList.length){
            clearList[0].remove();
        }
    }
});

document.getElementById("task").addEventListener("keydown",function(e){
        if(e.key=="Enter"){
            e.preventDefault();
            saveTask(e);           
        }    
           
    });

