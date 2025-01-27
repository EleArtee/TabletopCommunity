module.exports = app => {
    const informeReview = require ("../controllers/informeReview.controller.js");
    var router = require("express").Router();

    router.post("/", informeReview.create);

    router.get("/", informeReview.findAll);

    router.get("/:id", informeReview.findOne);

    router.put("/:id", informeReview.update);

    router.delete("/:id", informeReview.delete);

    app.use('/api/informeReview', router);

}