const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
        // match: Regular expression should come here (to validate email expression like 'test@test.com')
    },
    password: { type: String, required: true },
});


module.exports = mongoose.model('User', userSchema);