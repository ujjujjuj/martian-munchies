const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/product", require("./routes/product"));
app.use("/order", require("./routes/order"));

app.set("port", process.env.PORT || 5000);
app.listen(app.get("port"), () => {
  console.log(`Listening on http://localhost:` + app.get("port"));
});
