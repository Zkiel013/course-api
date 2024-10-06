import express from 'express';
import bodyParser from 'body-parser';
import coursesRoutes from './routes/courses.js'
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
 
app.use('/courses', coursesRoutes);

app.get('/', (req, res)=>{
    res.send('hello from homepage')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
