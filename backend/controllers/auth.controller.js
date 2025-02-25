const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.checkHash = (req, res)  => {
    const USER_URL = "http://localhost:8080/api/usuario";
    

    let user = {
        email: req.body.email,
        contrasena: req.body.contrasena,
    }

    const pass = user['contrasena']
    const email = user['email']
    let number = 0;

    fetch(USER_URL, {method: 'GET'})
    .then((usearch)=> usearch.json())
    .then((data) =>{
        for (let user of data){
            if (user.email == email)
                {let hashpass = user.contrasena
                    bcrypt.compare(pass, hashpass, function(err, result){
                        res.send(result) 
                     })
                }
            else {
                number += 1;
            }
        }
        if (number == data.length){
            res.send(false)
        }
    })
}    

exports.giveJTK = (req, res) => {
    const user = {
        id: req.body.id,
        nick: req.body.nick
    };

    const firma = 'r4dl4nds1sc00l'
    const caducidad = {expiresIn: '6h'};

    const token = jwt.sign(user, firma, caducidad)

    console.log(token)

    res.send(token)
}

