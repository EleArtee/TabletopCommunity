const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    const admin = {
       nick: req.body.nick,
       email: req.body.email,
       contraseña: req.body.contraseña,
       nombre: req.body.nombre,
       apellidos: req.body.apellidos,
       direccion: req.body.direccion,
    }

    if (!req.body.nick){
        res.status(400).send({
            message: "Falta información obligatoria"
        });
        return;
    }

    Admin.create(admin)
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algo pasó mientras se creaba el admin de mesa."
        })
    });
};

exports.findAll = (req, res) =>{
    Admin.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Algún error ocurrió mientras se obtenían los admins de mesa."
        })
    })

};

exports.findOne = (req, res) =>{
    const id = req.params.id;
    Admin.findByPK(id)
        .then(data =>{
            if (data) {
                res.send(data);
            }
            else {
                res.status(404).send({
                    message: `No se pudo encontrar el admin con el id=${id}.`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error obteniendo el admin con el id =" + id
            })
        })
};

exports.update = (req, res) => {
    const id = req.params.id;

    Admin.update(req.body, {
        where: { idAdmin: id }
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El admin fue actualizado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo actualizar el admin con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error actualizando el admin con el id =" + id
            })
        })
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Admin.destroy( {
        where: { idAdmin: id },
    })
        .then(num =>{
            if (num == 1) {
                res.send({
                    message: "El admin fue eliminado exitosamente."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar el admin con el id=${id}`
                });
            }
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Error eliminando el admin con el id =" + id
            })
        })

};