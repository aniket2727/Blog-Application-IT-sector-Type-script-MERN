






const mongoose = require('mongoose');
const userinfoschema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },

    name: {
        type: String,
        unique: true
    },

    pass: {
        type: String
    }
});

const usermodel = mongoose.model('UserloginInof', userinfoschema);
module.exports = usermodel;
