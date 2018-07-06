const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const app = express();
const massive = require('massive');
require('dotenv').config();

app.use(bodyParser.json());

const port = 4000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})

massive(process.env.CONNECTION_STRING)
    .then(db =>app.set('db', db));
