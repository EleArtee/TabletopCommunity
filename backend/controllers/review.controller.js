const db = require("../models");
const Review = db.review;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const review = {
       estrellas: req.body.estrellas,
       cuerpo: req.body.cuerpo,
    }

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
                err.message || "Algo pasó mientras se creaba el review de mesa."
        })
    });
};

exports.findAll = (req, res) =>{
    Review.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los reviews de mesa."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.idReview;
    Review.findByPK(id)
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
    const id = req.params.idReview;

    Review.update(req.body, {
        where: { id: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El review fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el review con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el review con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.idReview;

    Review.destroy( {
        where: { id: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El review fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el review con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el review con el id =" + id
            })
        })

};