const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <p>Try sending a request to /error and see what happens</p>
		<p>Try sending a request to /version and see what happens</p>
		<small>Version 2.1.0</small>
  `);
});

app.get('/error', (req, res) => {
	process.exit(1);
});

app.get('/version', (req, res) => {
	res.send('Version 2.1.0');
});

app.listen(8080);
