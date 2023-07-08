const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/vani-rao'; // Replace with your actual connection string

const connectDB = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Connection successful, perform database operations here
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        // Connection error, handle accordingly
        console.error('Error connecting to MongoDB:', error);
    });


// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,

//         })
//         console.log(`MongoDB Connected: ${conn.connection.host}`)

//     } catch (err) {
//         console.error(err)
//         process.exit(1)
//     }
// }

module.exports = connectDB;

// const mongoose = require('mongoose');

// const uri = 'mongodb://localhost:27017/mydatabase'; // Replace with your actual connection string

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         // Connection successful, perform database operations here
//         console.log('Connected to MongoDB');
//     })
//     .catch(error => {
//         // Connection error, handle accordingly
//         console.error('Error connecting to MongoDB:', error);
//     });
