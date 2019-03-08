const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routes
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

// MongoDB Atlas connection (put PW in different file inside of env; nodemon.json)
mongoose.connect(
    'mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@restfulshop-nodejs-4owoa.mongodb.net/test?retryWrites=true',
    {
    // useMongoClient option is no longer necessary in mongoose 5.x
    //  useMongoClient: true
    useNewUrlParser: true
});

// Middlewares

// make logs (logger API)
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});
// Middleware Routers
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);
// Error Handling
app.use((req, res, next) => {
    const err = new Error('Not Found.');
    err.status = 404;
    next(err);
});
// Triger to show error
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
});


module.exports = app;