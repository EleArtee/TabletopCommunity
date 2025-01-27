module.exports = app => {
    const Juego = require ("../controllers/juego.controller.js");
    var router = require("express").Router();

    router.post("/", Juego.create);

    router.get("/", Juego.findAll);

    router.get("/:id", Juego.findOne);

    router.put("/:id", Juego.update);

    router.delete("/:id", Juego.delete);

    app.use('/api/juego', router);

}