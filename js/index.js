


   function validateForm(){
    var gender=document.forms[myForm]["gender"];
    var day =document.forms[myForm]["cc"];
   document.write("OK");
   if(day=="sunday" ){
 if( gender=="Male"){
    document.write("Kwasi")
}
else if(gender =="Female"){
document.write("Akosua")
}
}else if(day == "monday"){
    if (gender == "Male"){
        alert("Kwado")
    }
    else if(gender == "Female"){
 alert("AdWoa")
    }
} else{
    alert("Wrong choice")
return false;
}
}