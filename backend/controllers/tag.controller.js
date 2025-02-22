const db = require("../models");
const Tag = db.tag;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const tag = {
       nombre: req.body.nombre,
    }

    if (!req.body.nombre){
        res.status(400).send({
            message: "Falta información obligatoria"
        });
        return;
    }

    Tag.create(tag)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba la etiqueta."
        })
    });
};

exports.findAll = (req, res) =>{
    Tag.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían las etiquetas."
        })
    })

};