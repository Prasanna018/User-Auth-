const userdb = require("./db");


function UserVerify(req, res, next) {


    const username = req.headers.username;
    const password = req.headers.password;

    userdb.findOne({
        username: username,
        password: password
    })
        .then(function (value) {
            if (value) {
                next();
            }
            else {
                res.json({
                    msg: "user does not found"
                })

            }

        })



}

module.exports = UserVerify;