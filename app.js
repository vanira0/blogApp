const express = require("express");
const dotenv = require('dotenv');
const app = express();
const path = require('path');
// const connectDB = require('./config/db');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const mongoose = require('mongoose')
const indexRoute = require('./routes/index');
const blogRoutes = require('./routes/blogs');

// Load config
dotenv.config({ path: './config/.env' })

// Passport config
// require('./config/passport')(passport)

// connectDB();
const uri = 'mongodb://127.0.0.1:27017/vani-rao'; // Replace with your actual connection string

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Connection successful, perform database operations here
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        // Connection error, handle accordingly
        console.error('Error connecting to MongoDB:', error);
    });


// body parser
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// view engine
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// MethodOverride
app.use(methodOverride('_method'));

// Routes
app.use('/', indexRoute)
app.use('/blogs', blogRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}...`)
})