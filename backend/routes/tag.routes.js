module.exports = app => {
    const Tag = require ("../controllers/tag.controller.js");
    var router = require("express").Router();

    router.get("/", Tag.findAll);
}