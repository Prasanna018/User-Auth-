const express = require("express");
const app = express();
const userdb = require('./db');
const jwt = require("jsonwebtoken");
const JWT_TOKEN = '12345';
app.use(express.json());

const UserVerify = require('./Middleware');

app.post('/signin', function (req, res) {
    // const username = req.body.username;
    // const password = req.body.password;
    const { username, password } = req.body;
    userdb.create({
        username: username,
        password: password

    })
    const token = jwt.sign(username, JWT_TOKEN);

    res.json({
        msg: "user created",
        token: token
    })


})


app.get('/login', UserVerify, function (req, res) {

    const auth = req.body.auth;

    const verify = jwt.verify(auth, JWT_TOKEN)

    res.json({
        msg: "you are logged in",
        verify
    })


})

app.listen(3000)