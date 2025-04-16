const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");

const app = express();

app.listen(PORT, () => {
  console.log(`Server berhasil running di port: ${PORT}`);
});

app.use(middlewareLogRequest);
app.use(express.json());

app.use("/", (req, res) => {
  res.send(
    `express-mysql-practice by <a href="https://killflex.vercel.app">killflex</a> on vercel`
  );
});
app.use("/users", usersRoutes);
