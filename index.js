const express = require("express");
const app = express();
const router = require("./routes/index"); // Adjust the path to your router file

// Use the router for specific routes
app.use("/", router); // Replace "your-base-route" with the desired base route

// Start the server
const PORT = 3340;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
