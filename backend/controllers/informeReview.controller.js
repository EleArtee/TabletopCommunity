const db = require("../models");
const informeReview = db.informeReview;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const informeReview = {
       cuerpo: req.body.cuerpo,
    }

    if (!req.body.cuerpo){
        res.status(400).send({
            message: "Falta información obligatoria"
        });
        return;
    }

    informeReview.create(informeReview)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba el informe."
        })
    });
};

exports.findAll = (req, res) =>{
    informeReview.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los informes."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.id;
    informeReview.findByPk(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el informe con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el informe con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    informeReview.update(req.body, {
        where: { idReport: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El informeReview fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el informe con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el informe con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    informeReview.destroy( {
        where: { idReport: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El informe fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el informe con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el informe con el id =" + id
            })
        })

};