// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());



let studentData = {
    personalInfo: {
        name: 'John Doe',
        age: 20,
        email: 'john@example.com',
        contact: '123-456-7890'
    },
    educationalHistory: [
        { institution: 'High School', degree: 'Diploma', years: '2015-2018' },
        { institution: 'College', degree: 'Bachelor\'s Degree', years: '2018-2022' }
    ],
    enrolledCourses: [
        { course: 'Math 101', instructor: 'Mr. Smith', duration: '3 months' },
        { course: 'Physics 101', instructor: 'Dr. Brown', duration: '4 months' }
    ]
};

app.get('/api/student', (req, res) => {
    res.json(studentData);
});

app.post('/api/student', (req, res) => {
    studentData = req.body;
    res.json({ message: 'Student data updated successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
