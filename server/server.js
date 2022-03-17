const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
// app.options('*', cors());
app.get('/', (req, res) => {
    res.json({ message: 'Hello from My ExpressJS' });
});

app.get('/api/students', cors(), async (req, res) => {
    const STUDENTS = [

        { id: 1, firstName: 'Lisa', lastName: 'Lee' },
        { id: 2, firstName: 'Eileen', lastName: 'Long' },
        { id: 3, firstName: 'Fariba', lastName: 'Dako' },
        { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
        { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    ];
    res.json(STUDENTS);
});

app.post('/api/students', cors(), async (req, res) => {
    let newUser = { id: req.body.id, firstName: req.body.name, lastName: req.body.lastName }
    console.log(req.body);
    res.json({ success: true });
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});