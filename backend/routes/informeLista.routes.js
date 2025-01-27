module.exports = app => {
    const informeLista = require ("../controllers/informeLista.controller.js");
    var router = require("express").Router();

    router.post("/", informeLista.create);

    router.get("/", informeLista.findAll);

    router.get("/:id", informeLista.findOne);

    router.put("/:id", informeLista.update);

    router.delete("/:id", informeLista.delete);

    app.use('/api/informeLista', router);

}