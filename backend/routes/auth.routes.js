module.exports = app => {
    const Auth = require ("../controllers/auth.controller.js");
    var router = require("express").Router();

    router.post("/hash", Auth.checkHash)
    router.post("/", Auth.giveJTK)
    router.post("/id", Auth.takeId)
    router.post("/nick", Auth.takeNick)
    router.post("/expire", Auth.checkExpire)

    app.use('/api/auth', router)
}