
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
    if(err) throw err;
    let inputData = data.toString().split("\n");
    for(i in inputData) {
        console.log(inputData[i]);
    }



});