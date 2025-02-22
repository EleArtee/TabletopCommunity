module.exports = app => {
    const Tag = require ("../controllers/tag.controller.js");
    var router = require("express").Router();

    router.post("/", Tag.create);
    router.get("/", Tag.findAll);

    app.use('/api/tag', router);
}