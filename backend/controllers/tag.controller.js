const db = require("../models");
const Tag = db.tag;
const Op = db.Sequelize.Op;

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