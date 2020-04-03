import express from 'express';
import path,{join} from 'path';

// const express = require('express');
// const path = require('path');

const app = express();
const __dirname = join(process.cwd());
// console.log('__dirname: ', __dirname);
app.use('/public',express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});
app.get('/example/:name/:age', (req, res) => {
    res.send(`Name: ${req.params.name}; Age : ${req.params.age}; tutorial : ${req.query.tutorial}; Sort By : ${req.query.sortBy}`);
});

app.listen(3000);

export default app;