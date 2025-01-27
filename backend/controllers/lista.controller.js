const db = require("../models");
const   Lista = db.lista;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const lista = {
       titulo: req.body.titulo,
       descripcion: req.body.descripcion,
    }

    if (!req.body.titulo){
        res.status(400).send({
            message: "Falta información obligatoria"
        });
        return;
    }

    Lista.create(lista)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba el lista de mesa."
        })
    });
};

exports.findAll = (req, res) =>{
    Lista.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los listas de mesa."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.idList;
    Lista.findByPK(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el lista con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el lista con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.idList;

    Lista.update(req.body, {
        where: { id: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El lista fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el lista con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el lista con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.idList;

    Lista.destroy( {
        where: { id: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El lista fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el lista con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el lista con el id =" + id
            })
        })

};