function sendReq(){

var name=document.getElementsByTagName("input")[0].value;
var msg=document.getElementsByTagName("input")[1].value;
var xhttp = new XMLHttpRequest();
xhttp.onload = function() {
   
     person=JSON.parse(xhttp.response);
     document.getElementById("demo").innerHTML=person.name+", age: "+person.age
     +" city:"+person.city;
    
};
xhttp.open("POST", "http://localhost:8080", true);
//xhttp.withCredentials = true;
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("name="+name+"&message="+msg);
}