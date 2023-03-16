const fs = require("fs");
let csv = fs.readFileSync("df_1.csv");

//split by new lines 
const lines = csv.toString().split("\n");

let result = [];

let headers = lines[0].split(",")
 
for (let i = 1; i < lines.length; i++) {
  let obj = {};
 
  let current = lines[i].split(",");

  for(let j=0; j < headers.length; j++){
    obj[headers[j]] = current[j];
  }

  result.push(obj)
}

// replace empty key "" to id && kill undefined records
result.forEach(record => {
  record.rank = record[""];
  delete record[""];

  for (key in record) {
    if ((!record[key]) === true) delete record[key];
  }


})

// remove empty objects
const cleanResult = result.filter(object => Object.keys(object).length !== 0);

let json = JSON.stringify(cleanResult);
fs.writeFileSync('dataset.json', json);