module.exports = app => {
    const Tag = require ("../controllers/tag.controller.js");
    var router = require("express").Router();

    router.post("/", Tag.create);
    router.get("/", Tag.findAll);
    router.get("/:id", Tag.findOne);

    app.use('/api/tag', router);


}