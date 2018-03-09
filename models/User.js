const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    facebookId: String,
    displayName: String,
    firstName: String,
    lastName: String,
    ageRange: String,
    email: [],
    gender: String,
    ageRange: String
});

mongoose.model('users', userSchema);