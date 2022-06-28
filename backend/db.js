const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/thinkbook?readPreference=primary&directConnection=true";

// Returns promise
const connectDB = () => {
  mongoose.connect(mongoURI, () => console.log("Connected to MongoDB"));
};

module.exports = connectDB;
