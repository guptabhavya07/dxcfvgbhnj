const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
    },
    content: {
        type: String,
        required: [true, "content is required"],
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the name of your User model
    },
});

module.exports = mongoose.model('Post', postSchema);
