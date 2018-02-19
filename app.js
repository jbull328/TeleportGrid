
const fs = require('fs');


//----------Pulls Data from Text File-----------------//


fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    let inputData = data.toString().split("\n");
    for(i in inputData) {
    }
  
  //Splits Cities and Queries into their own arrays//
    
  let cities = [];
  let distanceQueires = [];
  let pointToPointQuerires = [];
  let loopQueries = [];

  let regexCity = /-/g;
  let regexDist = /cities/;
  let regexPointToPoint = /can/;
  let regexLoop = /loop/;
  


  inputData.forEach(function(element, index){ 
    if(element.match(regexCity) != null){ 
       cities.push(element);  
    } else if (element.match(regexDist) != null){
        distanceQueires.push(element);
    } else if (element.match(regexPointToPoint) != null){
      pointToPointQuerires.push(element);
    } else if (element.match(regexLoop) != null){
      loopQueries.push(element);
    } 
    });

 console.log("--------------------> " + cities + " From cities array");
 console.log("--------------------> " + distanceQueires + " From distance queries")
 console.log("--------------------> " + pointToPointQuerires + " From point to array");
 console.log("--------------------> " + loopQueries + " From Loop queries");

 //Begins to split up cities to a more usuable structure

 let citiesLinked = [];
 let regexLastCity = /$(\w+)\$$/;
     
 cities.forEach((element, index) => {
  
  element.split(" ");
  citiesLinked.push
 });

 console.log("------------------> " + citiesLinked + " From cities linked");
});

