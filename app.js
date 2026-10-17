const express = require('express');
const path = require('path');

const app = express();
const { projects } = require('./data.json');

app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { projects });
});

app.get('/about', (req,res) => {
    res.render('about');
});

const PORT = 3000;

app.get('/projects/:id', (req, res, next) => {
    const projectId = Number(req.params.id);

    const project = projects.find(project => project.id === projectId);

    if (!project) {
        return next();
    }

    res.render('project', { project });
});

// Handle 404 errors
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Handle all errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});