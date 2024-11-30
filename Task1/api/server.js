// server.js

const express = require('express');
const cors = require('cors');
const router = require('./routes/route');
const sequelize = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', router);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
