import express from "express";
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

 
app.get('/api/courses', (req,res) => {
    const courses = ['english', 'math', 'science'];
    res.send(courses);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});