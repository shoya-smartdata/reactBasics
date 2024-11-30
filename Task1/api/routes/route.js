// routes/taskRoutes.js

const express = require('express');
const Task = require('../models/task');
const { addTask, getData, updateTask, deleteTask } = require('../controller/taskController');

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
