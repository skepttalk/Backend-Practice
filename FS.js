
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
let PORT = 3000;

let uid =0;
const DB_FILES = path.join(__dirname, "todo.json");

app.use(express.json());

if (!fs.existsSync(DB_FILES)) {
  try {
    fs.writeFileSync(DB_FILES, "{}");
    console.log("Database file created successfully.");
  } catch (err) {
    console.error("Error creating database:", err);
  }
}


app.post("/todos",(req,res)=>{
    const Newtodo = req.body;

      fs.readFile(DB_FILES, "utf8", (data) => {
 
        const todos = JSON.parse(data);
    
            todos[uid++]= Newtodo;
            const updatedData = JSON.stringify(todos, null, 2);

        fs.writeFile(DB_FILES, updatedData, () => {
          res
            .status(201)
            .json({ message: "Todo added successfully!", todo:Newtodo });
        });
      });
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


