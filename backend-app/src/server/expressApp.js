const express = require('express');
const session = require('express-session');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
import config from '../config/config';
import createUser from '../seeder/createUser';
const app = express();


app.use(cors());
app.use(express.static('public'));

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoDBURL);
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
    process.exit();
});

// run seeder for creating user
createUser();

app.set('view engine', 'pug');
app.set('trust proxy', 1); // trust first proxy
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {},
    }),
);
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);
app.use(logger('dev'));
module.exports = app;
