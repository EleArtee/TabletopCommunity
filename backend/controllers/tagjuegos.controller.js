const db = require("../models");
const TagGame = db.tagjuegos;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const taggame = {
       tagIdTag: req.body.idTag,
       juegoIdGame: req.body.idGame,
    }

    TagGame.create(taggame)
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
    TagGame.findAll()
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