const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
var cors = require("cors");

app.use(cors());

const port = process.env.PORT || 4200;

app.use(express.static(__dirname + "/dist/hotel"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/hotel/index.html"));
});

app.use("/", router);
app.listen(port, () => {
  console.log(`Server started on port ${port} `);
});
