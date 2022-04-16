const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    fullName: String,
    email: String,
    username: String,
    password: String
});

module.exports = userSchema;