
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));

mongoose.connect(
  "mongodb+srv://testUser:1234@cluster0.ypocggm.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0",
);

const Schema = mongoose.Schema;

const UserCount = mongoose.model(
  "UserCount",
  new Schema({
    Name: String,
    Count: Number,
  }),
  "UserCount",
);


app.get("/", () => {

	console.log("Hello");

});


app.post("/", () => {
	
	console.log("test1");

  const new_UserCount = new UserCount({
    Name: "First counter",
    Count: 1,
  }).save();

	console.log("test2");

});

const server_port = 3000;

const server = app.listen(server_port, () => {
  console.log("Server running on http://127.0.0.1:" + server_port);
});
