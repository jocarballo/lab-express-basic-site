
const express = require('express')
const app = express()
const port = 3000;


app.use(express.static("public"));

app.get('/', (req, res) => {
	console.log('home route')
	res.sendFile(__dirname + '/views/home-page.html')
});

app.get('/about', (req, res, next) => {
	res.sendFile(__dirname + '/views/about.html')
});

app.get('/work', (req, res, next) => {
	res.sendFile(__dirname + '/views/work.html')
});


app.listen(port, () => {
	console.log(`Listening on port ${port}`)
});