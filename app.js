const express = require("express");
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/.env' })

connectDB();

// Serve static files in Express
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/',(req,res) => {
    res.send('Hello World');
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Serving on port ${PORT}...`)
})