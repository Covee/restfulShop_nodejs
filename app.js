const express = require('express');
const app = express();

// make logs (logger API)
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'))
// Middleware Routers
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

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