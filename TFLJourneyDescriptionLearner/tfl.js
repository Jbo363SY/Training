/*// Variables
var departPC = document.getElementById("depPC");

var arrivalPC = document.getElementById("arrPC");

// used to improve user experience, by making it easier for them to navigate
document.getElementById("depPC").focus();

document.getElementById("googleMap").style.display= "none";


// event listeners








//functions

function loadData(){

function submitF (){
    
    var submitB = document.getElementById("mySubmit");
submitB.addEventListener("click", submitF, false);
    
    console.log("submitB");

}

function switchF (){

    var switchB = document.getElementById("mySwitch");
    switchB.addEventListener("click", switchF, false);

    alert("im working");

}

function op1F (){
 
    var option1 = document.getElementById("option1");
    switchB.addEventListener("click", op1F, false);
    alert("im working");

}

function op2F (){

    var option2 = document.getElementById("option2");
    switchB.addEventListener("click", op2F, false);
    alert("im working");

}

function op3F (){

    var option3 = document.getElementById("option3");
    switchB.addEventListener("click", op3F, false);

    alert("im working");

}

}*/// FA

var getDepPC;
var getArrPC;


var getJourneyData = document.getElementById("mySubmit").addEventListener("click", loadMyData, false);

function loadMyData(){

getDepPC = document.getElementById("depPC").value;
getArrPC = document.getElementById("arrPC").value;
    
if (getDepPC === ""){

    document.getElementById("depPC").focus();
    document.getElementById("messageD").innerHTML = "Please enter a valid postcode";

} else if (arrPC === ""){

    document.getElementById("arrPC").focus();
    document.getElementById("messageA").innerHTML = "Please enter a valid postcode";

    
} else {

var myRequest = new XMLHttpRequest;
    
    myRequest.open("GET", "https://api.tfl.gov.uk/journey/journeyresults/"+getDepPC+"/to/"+getArrPC, true);
    
    myRequest.onload = function (){
    
    if(myRequest.readyState === 4 && myRequest.status === 200){
    
        // The JSON.parse() is changing the JSON format of the data into a javascript object
        var myData
        = JSON.parse(myRequest.responseText);

        switch(choiceOption){
        
            case(1):
        //js notation and for loop to get data
                break;
                
                
            case(2):
                
                break;
                
                
            default:
                
                break;
        
        }
}

}
 
    myRequest.send();
    
}
    
    
}