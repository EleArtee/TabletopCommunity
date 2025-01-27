module.exports = app => {
    const Usuario = require ("../controllers/usuario.controller.js");
    var router = require("express").Router();

    router.post("/", Usuario.create);

    router.get("/", Usuario.findAll);

    router.get("/:id", Usuario.findOne);

    router.put("/:id", Usuario.update);

    router.delete("/:id", Usuario.delete);

    app.use('/api/usuario', router);

}