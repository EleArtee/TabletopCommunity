module.exports = app => {
    const TagGame = require ("../controllers/tagjuegos.controller.js");
    var router = require("express").Router();

    router.post("/", TagGame.create);
    router.get("/", TagGame.findAll);

    app.use('/api/taggame', router);
}