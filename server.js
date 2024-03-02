
const express = require("express");

const app = express();
app.use(express.static('public'));

app.get("/", (req, res) =>{



	
});

const server_port = 3000;

const server = app.listen(server_port, () => {

	console.log('Server running on http://127.0.0.1:' + server_port);

});


