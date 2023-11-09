const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/addTask', (req, res) => {
    const newTask = req.body.task;

    // Handle the new task and add it to your tasks list (an array in this case)
    // For simplicity, we'll just return the new task.
    const response = { task: newTask };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
