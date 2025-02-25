module.exports = app => {
    const Auth = require ("../controllers/auth.controller.js");
    var router = require("express").Router();

    router.post("/hash", Auth.checkHash)
    router.post("/", Auth.giveJTK)

    app.use('/api/auth', router)
}