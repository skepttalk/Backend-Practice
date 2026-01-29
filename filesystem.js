const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
let PORT = 3000;
const DB_FILE = path.join(__dirname, "todos.json");

const CONFIG_FILE = path.join(__dirname, "config.json");

// ==========================================
// USE readFileSync HERE (Startup Phase)
// We block the code here because we NEED the port
// before we can start the server.
// ==========================================
let APP_NAME = "Todo API";

let uid =0;

try {
  // Read the config file Synchronously
  const configData = fs.readFileSync(CONFIG_FILE, "utf8");
  const config = JSON.parse(configData);
  PORT = config.port ?? 3000;
  APP_NAME = config.app_name;
  console.log("✅ Configuration loaded successfully.");
} catch (err) {
  console.error("⚠️ Could not load config file, using defaults.");
}

// Middleware to parse JSON bodies from requests
app.use(express.json());

// ==========================================
// 1. INITIALIZATION (Synchronous)
// Check if our "database" file exists. If not, create it.
// We use Sync here because the server shouldn't start without it.
// ==========================================
if (!fs.existsSync(DB_FILE)) {
  try {
    fs.writeFileSync(DB_FILE, "{}"); // Initialize with empty array
    console.log("Database file created successfully.");
  } catch (err) {
    console.error("Error creating database:", err);
  }
}

// ==========================================
// 2. GET ALL TODOS (fs.readFile)
// ==========================================
app.get("/todos", (req, res) => {
  fs.readFile(DB_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading database" });
    }
    // Send the data back as JSON
    res.json(JSON.parse(data));
  });
});

// ==========================================
// 3. ADD A TODO (fs.readFile + fs.writeFile)
// We need to Read existing data -> Add new item -> Write back
// ==========================================
app.post("/todos", (req, res) => {
  const newTodo = req.body; // e.g., { "task": "Buy Milk" }

  // First, read the existing list
  fs.readFile(DB_FILE, "utf8", (readErr, data) => {
    if (readErr) {
      return res.status(500).json({ error: "Error reading database" });
    }

    // Parse JSON string to Array
    const todos = JSON.parse(data);

    // Add the new todo
    todos[uid++]=newTodo;

    // Convert Array back to JSON string
    const updatedData = JSON.stringify(todos, null, 2);

    // Write the new list back to the file
    fs.writeFile(DB_FILE, updatedData, (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: "Error writing to database" });
      }
      res
        .status(201)
        .json({ message: "Todo added successfully!", todo: newTodo });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});