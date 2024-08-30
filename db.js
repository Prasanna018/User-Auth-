const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://prasannagaikwad0018:2doX0XmcSRolWdrI@cluster0.zemrf.mongodb.net/new-auth")


const User = new mongoose.Schema({
    username: String,
    password: String
})

const userdb = mongoose.model("user", User);

module.exports = userdb;