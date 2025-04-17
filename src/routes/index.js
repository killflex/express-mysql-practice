const express = require("express");
const router = express.Router();

const usersRoutes = require("./users.js");

router.use("/", (req, res) => {
  res.send("Laba-laba sunda!");
});
router.use("/users", usersRoutes);

module.exports = router;
