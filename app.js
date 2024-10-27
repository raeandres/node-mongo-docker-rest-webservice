import express from "express";
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


// Test Routes
// Get route with sample return
app.get('/api/courses', (req,res) => {
    const courses = ['english', 'math', 'science'];
    res.send(courses);
});

// Get route with returning the user input param
app.get('/api/posts/:year/:month', (req,res) => {
    res.send(req.params);
});

