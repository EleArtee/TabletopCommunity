module.exports = app => {
    const informeUsuario = require ("../controllers/informeUsuario.controller.js");
    var router = require("express").Router();

    router.post("/", informeUsuario.create);

    router.get("/", informeUsuario.findAll);

    router.get("/:id", informeUsuario.findOne);

    router.put("/:id", informeUsuario.update);

    router.delete("/:id", informeUsuario.delete);

    app.use('/api/informeUsuario', router);

}