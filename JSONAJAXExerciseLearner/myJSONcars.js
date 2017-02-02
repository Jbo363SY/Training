// this is my js for the luxuary cars practice html


// There variables are created to check the values that have been selected in the html selectors.
var mySurvey = document.getElementById("survey");
    mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");
    myManufacturer.addEventListener("change", loadData, false);

function loadData(){

    
    // These variables are created to store the HTML values of the 2 selectores
    var surveyStored=mySurvey.options[mySurvey.selectedIndex].value;
    
    var manufacturerStored=myManufacturer.options[myManufacturer.selectedIndex].value;

//console.log(manufacturerStored); used to check the manufacturerStored variable is working.
    
    
// XMLHttpRequest is the main object to establish communication between the server and the browser.
    var myRequest = new XMLHttpRequest;
    
// The open method recieves 3 parameters
    myRequest.open("GET", "https://raw.githubusercontent.com/Jbo363SY/Training/master/JSONAJAXExerciseLearner/expensiveLuxuryCars.json", true);
    
    //You need a condition to check if the data has arrived
    myRequest.onload = function (){
    
    if(myRequest.readyState === 4 && myRequest.status === 200){
    
        // The JSON.parse() is changing the JSON format of the data into a javascript object
        var myData
        = JSON.parse(myRequest.responseText);
        
        //console.log(myData);
        
        if(manufacturerStored === ""){
        
            function clearAll(){
            
            var hideText = document.getElementsByClassName("data");
                
                for(var i  =0; i < hideText.length; i++){
                
                hideText[i].innerHTML = ""
                
                }
            
            }
            
            clearAll();
            
            document.getElementById("messageAlert").innerHTML = "Please choose a car company to load data"
        
        } else {
            
            document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
            
            document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
            
            document.getElementById("priceC").innerHTML = myData.data[manufacturerStored].price;
            
            document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].description;
            
            document.getElementById("videoC").innerHTML = '<iframe width = "auto" height = "auto" src =  "'+myData.data[manufacturerStored].video+'" framework = "0" allowfullscreen></iframe>';
            
            document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
            
            document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
            
            document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
            
            document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
            
            document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
            
            document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
            
            document.getElementById("imgC").innerHTML = '<img width = "auto" height = "auto" src =  "'+myData.data[manufacturerStored].img+'" framework = "auto"></img>';
            
            document.getElementById("messageAlert").innerHTML = "";
           
            // this is my canvasJS to display the ratings of the cars
            
            
	var chart = new CanvasJS.Chart("chartContainer", {
		
        theme: "theme1",//theme1
        backgroundColor:"transparent",
        dataPointMaxWidth:29,
        
        axisX:{
            labelFontColor:"white",
            gridColour:"white",
            lineColor:"white"
    },
        axisY:{
            labelFontColor:"white",
            gridColor:"white",
            gridThinkness:1,
            lineColor:"white"
    },
		animationEnabled: false,   // change to true
		data: [              
		{
            //The code below is for the doughnut labels color, without this there is an error
                indexLabelColor: "white",
            
			// Change type to "bar", "area", "spline", "pie",etc.
			type: surveyStored,
			dataPoints: [
				{ label: "Overall",  y: myData.data[manufacturerStored].quality[0].rating  },
                
				{ label: "Mechanical", y: myData.data[manufacturerStored].quality[1].rating  },
                
				{ label: "Powertrain", y: myData.data[manufacturerStored].quality[2].rating  },
                
				{ label: "Body",  y: myData.data[manufacturerStored].quality[3].rating  },
                
				{ label: "Interior",  y: myData.data[manufacturerStored].quality[4].rating  },
                
                { label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating}
			]
		}
		]
	});
	chart.render();
            
        }
    }
    
    }
    
    
    
   /* window.onload = function () {
    
    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    
	var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme1",//theme1
		title:{
			text: "Basic Column Chart - CanvasJS"              
		},
		animationEnabled: true,   // change to true
		myData: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: "surveyStored",
			dataPoints: [
				{ label: "Overall",  y: document.getElementById("chartContainer").innerHTML = myData.data[manufacturerStored].quality[0].rating  },
                
				{ label: "Mechanical", y: myData.data[manufacturerStored].quality[1].rating  },
                
				{ label: "Powertrain", y: myData.data[manufacturerStored].quality[2].rating  },
                
				{ label: "Body",  y: myData.data[manufacturerStored].quality[3].rating  },
                
				{ label: "Interior",  y: myData.data[manufacturerStored].quality[4].rating  },
                
                { label: "Accessories", y: myData.data[manufacturerStored].quality[5].rating.value}
			]
		}
        ]
	});
	chart.render();
}*/// 1st chart attempt
    
    myRequest.onerror = function()
    {
    document.getElementById("messageAlert").innerHTML = "Failed, no internet connection."
    }
    
    myRequest.send();
    
    //console.log(myRequest);
}