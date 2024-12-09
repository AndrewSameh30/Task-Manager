const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/taskRouter');
const sequelize = require('./config/database');

const app = express();
app.use(bodyParser.json());

// Use taskRouter for API routes
app.use('/api', taskRouter);

// Sync the database and start the server
sequelize.sync().then(() => {
    console.log('Database synchronized!');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error('Database sync failed:', err);
});
