import express from 'express';

const app = express();
app.get('/', (req, res) =>{
    res.send('Hello World')
});
app.get('/example/:name/:age', (req, res) =>{
    res.send(`Name: ${req.params.name}; Age : ${req.params.age}; tutorial : ${req.query.tutorial}; Sort By : ${req.query.sortBy}`);
});

app.listen(3000);