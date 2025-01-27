const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const usuario = {
       nick: req.body.nick,
       email: req.body.email,
       contraseña: req.body.contraseña,
       empresa: req.body.empresa,
    }

    if (!req.body.nick){
        res.status(400).send({
            message: "Falta información obligatoria"
        });
        return;
    }

    Usuario.create(usuario)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba el usuario de mesa."
        })
    });
};

exports.findAll = (req, res) =>{
    Usuario.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los usuarios de mesa."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.idUser;
    Usuario.findByPK(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el usuario con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el usuario con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.idUser;

    Usuario.update(req.body, {
        where: { id: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El usuario fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el usuario con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el usuario con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.idUser;

    Usuario.destroy( {
        where: { id: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El usuario fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el usuario con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el usuario con el id =" + id
            })
        })

};