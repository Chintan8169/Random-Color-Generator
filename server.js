const express = require("express");
const path = require("path");




const staticPath = path.join(__dirname, "static");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(staticPath));


app.get("/", (req, res) => {
	res.status(200).sendFile("index.html");
});



app.listen(port);