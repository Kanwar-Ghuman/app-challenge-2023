// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://heyanantraj:Welcome.2020@peopleinfo.18l4vgp.mongodb.net/?retryWrites=true&w=majority/PeopleInfo",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  });

// Create a Mongoose schema and model
const formDataSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    language: String,
    github: String,
    description: String,
  },
  { timestamps: true }
);

const FormData = mongoose.model("FormData", formDataSchema);

// Use body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/pages/form.html");
});

// Handle form submission
app.post("/", (req, res) => {
  const { firstName, lastName, email, language, github, description } =
    req.body;

  // Create a new document and save it to MongoDB
  const formData = new FormData({
    firstName,
    lastName,
    email,
    language,
    github,
    description,
  });

  formData.save((err) => {
    if (err) {
      console.error(err);
      res.send("Error saving data to MongoDB.");
    } else {
      res.send("Data saved to MongoDB successfully.");
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
