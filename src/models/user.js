const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false,
        unique: false
    },
    lastName: {
        type: String,
        required: false,
        unique: false
    },
    mobile: {
        type: String,
        required: false,
        unique: false
    },
    email: {
        type: String,
        required: true,
        unique: false
    },
    profileImage: {
        type: String,
        required: false,
        unique: false
    },
    roleSchema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    },
}, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);