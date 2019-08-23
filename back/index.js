const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const labelAPIRouter = require('./routes/label');

dotenv.config();
const app = express();

app.use(logger('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'cookie'
}))


app.use('/api/label', labelAPIRouter);

app.listen(8080, () => {
    console.log('localhost:8080 에서 실행중')
})