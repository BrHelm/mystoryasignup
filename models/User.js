const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    facebookId: String,
    displayName: String,
    name: String,
    firstName: String,
    lastName: String,
    ageRange: String,
    email: [],
    gender: String,

    credits: { type: Number, default: 0 },
    booksRemain: {type: Number, default: 4 },
    bookSelected: String,
    bookCurrent: String,
    pageCurrent: Number
    
});

mongoose.model('users', userSchema);