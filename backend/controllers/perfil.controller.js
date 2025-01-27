const db = require("../models");
const Perfil = db.perfil;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const perfil = {
       descripcion: ""
    }

    Perfil.create(perfil)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba el perfil."
        })
    });
};

exports.findAll = (req, res) =>{
    Perfil.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los perfiles."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.id;
    Perfil.findByPK(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el perfil con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el perfil con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Perfil.update(req.body, {
        where: { idProfile: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El perfil fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el perfil con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el perfil con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Perfil.destroy( {
        where: { idProfile: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El perfil fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el perfil con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el perfil con el id =" + id
            })
        })

};