import express from 'express';

const router = express.Router();

let courses = [// in reality we will take from database
    {
        id: 1,
        title: "Introduction to Python",
        description: "Learn the basics of Python programming including syntax, data types, and functions.",
        duration: "4 weeks"
    },
    {
        id: 2,
        title: "Web Development with HTML, CSS, and JavaScript",
        description: "Build responsive websites using HTML, CSS, and JavaScript.",
        duration: "6 weeks"
    },
    {
        id: 3,
        title: "Data Structures and Algorithms",
        description: "Understand fundamental data structures and algorithms to improve your coding skills.",
        duration: "8 weeks"
    },
    {
        id: 4,
        title: "Machine Learning Basics",
        description: "An introductory course to machine learning, covering supervised and unsupervised learning algorithms.",
        duration: "5 weeks"
    },
    {
        id: 5,
        title: "Database Design with SQL",
        description: "Learn how to design and interact with databases using SQL queries.",
        duration: "4 weeks"
    }
]


//get all courses
router.get('/', (req, res)=>{
    res.send(courses)
});

//create a course(all)
router.post('/', (req, res) => {
    const newCourse = req.body;
    const newId = courses.length ? courses[courses.length - 1].id + 1 : 1;
    const courseWithId = { id: newId, ...newCourse };    
    courses.push(courseWithId);
    res.status(201).send(`Course: ${courseWithId.title} added to database!`);//201 means created
});

//get course by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundCourse = courses.find((course) => course.id === parseInt(id));//find index of the course in courses
    res.send(foundCourse);
});

//update a course by id
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, duration } = req.body;

    const courseToUpdate = courses.find(course => course.id === parseInt(id));
    
    if(title) {
        courseToUpdate.title = title;
    }

    if(description) {
        courseToUpdate.description = description;
    }

    if(duration) { 
        courseToUpdate.duration = duration;
    }
    res.send(`Course with id: ${id} updated successfully!`)
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    courses = courses.filter(course => course.id !== parseInt(id));
    res.send(`course with course id: ${id} deleted from the database.`);//
})

export default router;