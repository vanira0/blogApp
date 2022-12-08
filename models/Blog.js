const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
        trim: true
    },
    // subheading: String,
    body: {
        type: String,
        // required: true
    },
    // status: {
    //     type: String,
    //     default: 'public',
    //     enum: ['public', 'private']
    // },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // },
    image: String,    // ImageSchema
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

module.exports = mongoose.model('Blog', blogSchema);