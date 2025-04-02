const mongoose = require('mongoose');
require('dotenv').config();

//mongodb uri
const MONGO_URI = process.env.MONGODB_URI;

//connect to db
const connectDb = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}`, {
    });
    console.log('Mongoose connected to MONGODB Atlas');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDb;