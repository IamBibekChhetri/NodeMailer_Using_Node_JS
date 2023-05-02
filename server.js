const express = require("express");
const appRoute = require("./routes/route.js");

const app = express();
const PORT = process.env.PORT || 5555;

app.use(express.json());

// Routes
app.use("/api", appRoute);

app.listen(PORT, () => {
  console.log("Server listening on port");
});
