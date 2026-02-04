const fs = require("fs");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");

const DB_FILE = path.join(__dirname, "data.csv");
const NEW_FILE = path.join(__dirname, "data.json");

debugger;
fs.readFile(DB_FILE, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading CSV:", err);
    return;
  }


  
  let  dataArr = data.split("\r\n");
  let headers=dataArr[0].split(",");


  const rows = dataArr.slice();

  const jsonData = rows.map(row => {
  const rowDataArrrow=row.split(",");
  const dataObject={};

  headers.forEach((header,idx)=>{
    dataObject[header]=rowDataArrrow[idx];
  })
  return dataObject;
  });


  
  console.log("JSON Data Converted",jsonData);

  fs.writeFile(NEW_FILE, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.log("Error writing JSON:", err);
      return;
    }
    console.log(" JSON File Saved Successfully:", NEW_FILE);
  });
});



