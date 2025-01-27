module.exports = app => {
    const informeJuego = require ("../controllers/informeJuego.controller.js");
    var router = require("express").Router();

    router.post("/", informeJuego.create);

    router.get("/", informeJuego.findAll);

    router.get("/:id", informeJuego.findOne);

    router.put("/:id", informeJuego.update);

    router.delete("/:id", informeJuego.delete);

    app.use('/api/informeJuego', router);

}