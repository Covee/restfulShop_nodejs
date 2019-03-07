const express = require('express');
const app = express();

// make logs (logger API)
const morgan = require('morgan');

const bodyParser = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');


// Middlewares

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