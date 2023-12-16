const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
	res.send('<h1>How Are You?</h1>');
});

app.use('*', (req, res, next) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
	next(`${baseUrl} Not Found!`);
});

app.listen(port, () => {
	console.log(`Server is running: ${port}`);
});
