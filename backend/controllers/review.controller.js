const db = require("../models");
const Review = db.review;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');

exports.create = (req, res) =>{
    const review = {
       estrellas: req.body.estrellas,
       cuerpo: req.body.cuerpo,
       idGame: req.body.idGame,
       idUser: req.body.idUser
    }
    
    const token = req.body.token
    const firma = 'r4dl4nds1sc00l'
    
    jwt.verify(token, firma, function(err, decoded) {
        if(err){
            console.log(err)
        }else{
            if (!req.body.estrellas){
                res.status(400).send({
                    message: "Falta información obligatoria"
                });
                return;
            }
        
            Review.create(review)
            .then(data =>{
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Algo pasó mientras se creaba la review."
                })
            });
        }
    })
}

exports.findAll = (req, res) =>{
    Review.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían las reviews."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.id;
    Review.findByPk(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el review con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el review con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Review.update(req.body, {
        where: { idReview: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "La review fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la review con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando la review con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Review.destroy( {
        where: { idReview: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "La review fue eliminada exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la review con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando la review con el id =" + id
            })
        })

};