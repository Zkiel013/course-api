# Course Management API

## Overview
The Course Management API is a RESTful API built using Node.js and the Express framework. It provides endpoints that allow users to perform CRUD operations (Create, Read, Update, Delete) on course data, enabling easy management of courses through HTTP requests.

## Features
- Retrieve All Courses: Fetch a list of all available courses.
- Create a New Course: Add a new course to the database.
- Retrieve a Course by ID: Fetch details of a specific course by its unique ID.
- Update a Course by ID: Modify the details of an existing course using its ID.
- Delete a Course by ID: Remove a course from the database using its ID.

## Technologies Used
- Node.js: A JavaScript runtime environment that executes code server-side.
- Express: A minimal and flexible Node.js web application framework for building APIs and web applications.

## API Endpoints
The API provides the following endpoints:

   1. GET /api/courses
   Retrieve the list of all courses.

   2. POST /api/courses
   Create a new course by providing course details (e.g., name, description).

   3. GET /api/courses/:id
   Retrieve a single course by its unique ID.

   4. PUT /api/courses/:id
   Update an existing course by its ID, using the request body to send updated information.

   5. DELETE /api/courses/:id
   Delete a course by its ID.

##Getting started (note: this has only been tested on windows and not any other OS)
-Clone the Repository
-Install Dependencies: 
   install node js if not already
   Navigate to the project directory and run:
      npm install 
      npm start
-your server hosts on http://localhost:3000
-I've used 'postman' to check and test the CRUD operations from "https://www.postman.com/", you can use any website you wish.
-if you do use postman ensure you have installed the postman agent

