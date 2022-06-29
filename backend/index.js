const connectDB = require("./db");
const express = require("express");
var cors = require("cors");
const app = express();

app.use(cors());

const port = 5000;
connectDB();

// middleware
app.use(express.json());

// Available Routes
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/notes", require("./routes/notes.js"));

app.listen(port, () => {
  console.log(`ThinkBook backend listening on port ${port}`);
});
