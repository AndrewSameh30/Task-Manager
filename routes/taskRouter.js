const express = require('express');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const { registerUser, loginUser } = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

// User registration (signup)
router.post('/register', registerUser);

// User login (jwt)
router.post('/login', loginUser);

// Authenticated task routes
router.get('/tasks', authenticateUser, getAllTasks);
router.post('/tasks', authenticateUser, createTask);
router.put('/tasks/:id', authenticateUser, updateTask);
router.delete('/tasks/:id', authenticateUser, deleteTask);

module.exports = router;
