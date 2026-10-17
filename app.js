const express = require('express');
const path = require('path');

const app = express();
const { projects } = require('./data.json');

app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { projects });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});