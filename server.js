require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const activityLogger = require('./middleware/logger').activityLogger;
const index = require('./routes');
const api = require('./routes/api');
const cors = require('cors');

/***********************************
        DATABASE CONNECTION
************************************/
mongoose.connect(process.env.DB);
const db = mongoose.connection;
db.on('error', () => console.log('DB connection error'));
db.once('open', () => {
    console.log('')
});

/***********************************
             MIDDLEWARE
************************************/
app.use(cors());
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json());
app.use(activityLogger);

/***********************************
             STATIC FILES
************************************/
app.use('/static', express.static(path.resolve('client', 'build', 'static')))


/***********************************
                ROUTES
************************************/
app.use('/api/v1', api);
app.use('*', index);

/***********************************
                PORT
************************************/
let port = process.env.PORT || 3001;

/***********************************
                SERVER
************************************/
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



module.exports = app;