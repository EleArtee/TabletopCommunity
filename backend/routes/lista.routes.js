module.exports = app => {
    const Lista = require ("../controllers/lista.controller.js");
    var router = require("express").Router();

    router.post("/", Lista.create);

    router.get("/", Lista.findAll);

    router.get("/:id", Lista.findOne);

    router.put("/:id", Lista.update);

    router.delete("/:id", Lista.delete);

    app.use('/api/lista', router);

}