// routes/taskRoutes.js

const express = require('express');
const Task = require('../model/task');
const {addTask}= require('../controller/taskController');
const {getData} = require('../controller/taskController');
const {updateTask} = require('../controller/taskController');
const {deleteTask} = require('../controller/taskController');

const router = express.Router();

// Create a new task
router.post('/', addTask );

// Get all tasks
router.get('/', getData );

// Update task
router.put('/:id', updateTask);

// Delete task
router.delete('/:id', deleteTask);

module.exports = router;
