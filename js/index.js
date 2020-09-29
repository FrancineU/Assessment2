
function formValidation(){
var dd =document.getElementById("date").value;
var mm=document.getElementById("month").value;
var yy=document.getElementById("year").value;
var genders=document.getElementById("gender").value;
var cc=document.getElementById("century").value;


var dayWeek  = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm)/10)) + mm) % 7;

if(day<1 || day>31  && month<1  || month>12) {
  
        alert("The day and month are invalid");

    }else if(gender==="female"){
             switch(dayWeek){
        case 1 :
            document.write("You've born on monday  && your Akhan name is  Adwoa " );
        break;     
        case 2:
            document.write("You've born on tuesday && your akhan Name is  Abenaa");
        break;
            case 3:
            document.write("You've born on tuesday && your akhan Name is Akua");
            break;
         case 4:
            document.write("You've born on tuesday && your akhan Name is Yaa");
        break;
      case 5:
            document.write("You've born on tuesday && your akhan Name is Afua");
            break;
     case 6:
        document.write("You've born on tuesday && your akhan Name is Ama") ;
        break;

     case 7:
      document.write("You've born on tuesday && your akhan Name is Akosua ");
      break;
      default:
          document.write("Wrong choice");
    }
 } else if(gender=="male"){

    switch(dayWeek){
        case 1 :
            document.write("You've born on monday  && your Akhan name is  Kwadwo" );
        break;     
        case 2:
            document.write("You've born on tuesday && your akhan Name is Kwabena ");
        break;
            case 3:
            document.write("You've born on tuesday && your akhan Name is  Kwaku");
            break;
         case 4:
            document.write("You've born on tuesday && your akhan Name is Yaw");
        break;
      case 5:
            document.write("You've born on tuesday && your akhan Name is Kofi");
            break;
     case 6:
        document.write("You've born on tuesday && your akhan Name is Kwame ") ;
        break;

     case 7:
      document.write("You've born on tuesday && your akhan Name is Kwasi");
      break;
      default:
          document.write("Wrong choice");
    }

    }
    




}