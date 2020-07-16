//* Mongoose Connection */
const mongoose = require("mongoose");
const assert = require("assert");
require("dotenv").config()


// const url = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}:${process.env.MONGO_URL}:27017/reddit-db`;
let url = process.env.NODE_ENV==="production" ? `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}:27017/reddit-db?authSource=admin` : `mongodb://${process.env.MONGO_URL}:27017/reddit-db`;
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology:true }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
// mongoose.set('debug', true);

module.exports = mongoose.connection;