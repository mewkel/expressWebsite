const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", () => {

  console.log("test");

});

app.post("/", () => {
});

const port = 3000;

const server = app.listen(port, () => {
  console.log("Server running on http://127.0.0.1:" + port);
});
