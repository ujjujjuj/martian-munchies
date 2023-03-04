const express = require("express");
const { Item } = require("../db");

const router = express.Router();

router.post("/all", () => {
  const items = Item.findAll();
  console.log(items);
});

module.exports = router;
