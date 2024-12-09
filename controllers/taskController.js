const Task = require('../models/task');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { userId: req.user.userId } });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    const { title, description, due_date } = req.body;

    // console.log(req); 
    try {
        const task = await Task.create({
            title,
            description,
            due_date,
            userId: req.user.userId,
        });
        res.status(201).json({ message: 'Task created successfully', id: task.id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an existing task
exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, due_date, status } = req.body;

    try {
        const task = await Task.findOne({ where: { id, userId: req.user.userId } });
        if (!task) {
            return res.status(404).json({ message: 'Task not found or unauthorized' });
        }

        task.title = title || task.title;
        task.description = description || task.description;
        task.due_date = due_date || task.due_date;
        task.status = status || task.status;

        await task.save();
        res.json({ message: 'Task updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findOne({ where: { id, userId: req.user.userId } });
        if (!task) {
            return res.status(404).json({ message: 'Task not found or unauthorized' });
        }

        await task.destroy();
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
