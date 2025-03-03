const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const expire = require('jwt-check-expiration')


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
    if (!user.id || !user.nick){
        res.send("400 BAD REQUEST")
    }

    console.log(user)

    const firma = 'r4dl4nds1sc00l'
    const caducidad = {expiresIn: '6h'};

    const token = jwt.sign(user, firma, caducidad)

    console.log(token)
    console.log(typeof token)

    res.send(token)
   
}

exports.takeId = (req, res) => {
    const jwtoken = req.body.jwtoken
    const firma = 'r4dl4nds1sc00l'

    const token = jwt.verify(jwtoken, firma)
    const userId = token.id;
    
    res.send(userId.toString())
}

exports.takeNick = (req, res) => {
    const jwtoken = req.body.jwtoken
    const firma = 'r4dl4nds1sc00l'


    const token = jwt.verify(jwtoken, firma)
    const nick = token.nick;
    
    res.send(nick)


}

exports.checkExpire = (req, res) => {
    const jwtoken = req.body.jwtoken
    res.send(expire.isJwtExpired(jwtoken))
}
