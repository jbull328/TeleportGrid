
const fs = require('fs');


//----------Pulls Data from Text File-----------------//


fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    let inputData = data.toString().split("\n");
    for(i in inputData) {
    }
  
  //Splits Cities and Queries into their own arrays//
    
  let cities = [];
  let distanceQueries = [];
  let pointToPointQuerires = [];
  let loopQueries = [];

  let regexCity = /-/g;
  let regexDist = /cities/;
  let regexPointToPoint = /can/;
  let regexLoop = /loop/;
  


  inputData.forEach((element, index) => { 
    if(element.match(regexCity) != null){ 
      cities.push(element);  
    } else if (element.match(regexDist) != null){
      distanceQueries.push(element);
    } else if (element.match(regexPointToPoint) != null){
      pointToPointQuerires.push(element);
    } else if (element.match(regexLoop) != null){
      loopQueries.push(element);
    } 
    });

 console.log("--------------------> " + cities + " From cities array");
 console.log("--------------------> " + distanceQueries + " From distance queries")
 console.log("--------------------> " + pointToPointQuerires + " From point to poinr quires");
 console.log("--------------------> " + loopQueries + " From Loop queries");

 //Begins to split up cities to a more usuable structure

 let citiesLinked = [];
 
     
 cities.forEach((element, index) => {
    element = element.split(" - ");
    let firstCities = element[0];
    let secondCities = element[1];
    citiesLinked.push([firstCities, secondCities]);
  console.log(element);
  });
 
  //Get operators from Queries
  let distanceQueriesData = [];

  distanceQueries.forEach((element, index) => {
    element = element.split(" ");
    let stops = element[4];
    let city = element[2];
    distanceQueriesData.push([stops, city]);
  });

 
  // let pointToPointData = [];

  // pointToPointQuerires.forEach((element, index) => {
  //   let match = citiesLinked;
  //   let cityNames = new RegExp(match);
  //   element = element.split(" ");
  //     if(element.match(cityNames) != null) {
  //     pointToPointData.push(element)
  //   }
  //   console.log(pointToPointData);
  // });  


  let loopQueriesData = [];

  loopQueries.forEach((element, index) => {
    element = element.split(" ");
    loopQueriesData.push([element.pop()])
  });
  
  console.log(loopQueriesData);  

  console.log(distanceQueriesData);
  
 console.log("------------------> " + citiesLinked + " From cities linked");
});

