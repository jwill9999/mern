require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const activityLogger = require('./middleware/logger').activityLogger;
const index = require('./routes');
const api = require('./routes/api');

/***********************************
        DATABASE CONNECTION
************************************/
mongoose.connect(process.env.DB);
const db = mongoose.connection;
db.on('error', () => console.log('DB connection error'));
db.once('open', () => {
    console.log('DB connected successfully')
});

/***********************************
             MIDDLEWARE
************************************/
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json());
app.use(activityLogger);

/***********************************
             STATIC FILES
************************************/
app.use(express.static(path.resolve('client', 'build')));

/***********************************
                ROUTES
************************************/
app.use('/api/v1', api);
app.use('/', index);

/***********************************
                PORT
************************************/
let port = process.env.PORT || 3002;

/***********************************
                SERVER
************************************/
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.close = function () {
    server.close();
  };

module.exports = app;