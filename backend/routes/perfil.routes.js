module.exports = app => {
    const Perfil = require ("../controllers/perfil.controller.js");
    var router = require("express").Router();

    router.post("/", Perfil.create);

    router.get("/", Perfil.findAll);

    router.get("/:id", Perfil.findOne);

    router.put("/:id", Perfil.update);

    router.delete("/:id", Perfil.delete);

    app.use('/api/perfil', router);

}