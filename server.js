const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.static("public"));


mongoose.connect("mongodb+srv://testUser:1234@cluster0.ypocggm.mongodb.net/Database?retryWrites=true&w=majority&appName=Cluster0");

const Schema = mongoose.Schema;

const user_count = mongoose.model('user_count', new Schema({

	Count: String,

}), 'UserCount');



app.get("/", (req, res) => {


	const new_count = new user_count({Count: "1",}).save();


});

const server_port = 3000;

const server = app.listen(server_port, () => {
	console.log("Server running on http://127.0.0.1:" + server_port);
});
