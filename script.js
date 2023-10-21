var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

function addRow(){
    var taskName=prompt("Task Name: ");
    var dueDate=prompt("Due Date","mm/dd/yyyy");
    var hoursNeeded=prompt("How much time will it take?");
    var table1=document.getElementsByTagName("tbody")[0];
    var row=table1.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=taskName;
    cell2.innerHTML=dueDate;
    cell3.innerHTML=hoursNeeded;
    cell4.innerHTML="asdf";
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
console.log(document.getElementById("date").innerHTML);
document.getElementById("date").innerHTML=String(today);
