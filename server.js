const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const db = require("mongodb");

const app = express();

mongoose.connect(
  "mongodb+srv://testUser:1234@cluster0.ypocggm.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0",
);

app.use(express.static("public"));

const Schema = mongoose.Schema;

const UserCount = mongoose.model(
  "UserCount",
  new Schema({
    Name: String,
    Count: Number,
  }),
  "UserCount",
);

app.get("/", async (req, res) => {
  fs.readFile("index.html", (err, data) => {
    res.setHeader("Content-type", "text/html");
    res.write(data);
  });

  const counter = await UserCount.find({ "Name": "First counter" });

  //db.UserCount.updateOne({ "Name": "First counter" }, {
    //$set: {
      //Count: 2,
    //},
    //$currentDate: { lastUpdated: true },
  //});

  const new_count = counter[0].Count + 1;

  await UserCount.findOneAndUpdate({Name:'First counter'}, {Count: new_count});

  

  res.write("Number of users visited: " + counter[0].Count);
  res.end();
  //const new_UserCount = new UserCount({
  //Name: "First counter",
  //Count: 1,
  //}).save();
});

const server_port = 3000;

const server = app.listen(server_port, () => {
  console.log("Server running on http://127.0.0.1:" + server_port);
});
