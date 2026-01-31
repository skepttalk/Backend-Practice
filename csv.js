const fs = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "data.csv");
const NEW_FILE = path.join(__dirname, "data.json");

fs.readFile(DB_FILE, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading CSV:", err);
    return;
  }

  const rows = data.split("\n").slice(1);

  const jsonData = rows.map(row => {
  const [year, month, cpi, wpi] = row.split(",");
  return { year, month, cpi, wpi };
  });

  
  console.log("JSON Data Converted");
  fs.writeFile(NEW_FILE, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.log("Error writing JSON:", err);
      return;
    }
    console.log(" JSON File Saved Successfully:", NEW_FILE);
  });
});
