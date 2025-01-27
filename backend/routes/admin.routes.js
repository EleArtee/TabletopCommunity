module.exports = app => {
    const Admin = require ("../controllers/admin.controller.js");
    var router = require("express").Router();

    router.post("/", Admin.create);

    router.get("/", Admin.findAll);

    router.get("/:id", Admin.findOne);

    router.put("/:id", Admin.update);

    router.delete("/:id", Admin.delete);

    app.use('/api/admin', router);

}