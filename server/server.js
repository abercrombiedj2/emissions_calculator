const express = require('express');
const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());
const MongoClient = require('mongo').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('emissions_calculator');
    const usersCollection = db.collection('users');
    const usersRouter = createRouter(usersCollection);
    app.use('/api/users', usersRouter)
  })
  .catch(console.error) 

app.listen(5000, function() {
    console.log(`App server running on port ${this.address().port}`);
});

