const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const mainRouter = require("./routes/index.js");
const middlewareLogRequest = require("./middleware/logs.js");

const app = express();

app.listen(PORT, () => {
  console.log(`Server berhasil running di port: ${PORT}`);
});

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/", mainRouter);
