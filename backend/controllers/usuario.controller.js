const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

exports.create = (req, res) =>{
    let usuario = {
       nick: req.body.nick,
       email: req.body.email,
       contrasena: req.body.contrasena,
       isDeveloper: req.body.isDeveloper,
       empresa: req.body.empresa,
    }
    let salt = 2;
    const hashpass = bcrypt.hashSync((usuario['contrasena']), salt);
    usuario['contrasena'] = hashpass.toString();

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
                err.message || "Algo pasó mientras se creaba el usuario."
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
                err.message || "Algún error ocurrió mientras se obtenían los usuarios."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.id;
    Usuario.findByPk(id)
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
    const id = req.params.id;

    Usuario.update(req.body, {
        where: { idUser: id }
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
    const id = req.params.id;

    Usuario.destroy( {
        where: { idUser: id },
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