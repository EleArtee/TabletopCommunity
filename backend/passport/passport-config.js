import { Strategy as LocalStrategy } from "passport-local";
const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;



function initialize(passport){
    const authenticateUser = async (email, password, done) =>{
        const user = (await Usuario.findOne()).where('email', email);
        if(user == null){
            return done(null, false,{message: 'No hay ningún usuario con este email'})
        }
        try {
            if (password==user.contrasena){
                return done(null, user)
            }else{
                return done(null, false, {message: 'Contraseña incorrecta'})
            }
        } catch (e) {
            return done(e)
        }       

    }

    passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))

    passport.serializeUser((user, done) => done(null, user.idUser))
    
    passport.deserializeUser(async (idUser, done) => {  
        done(null, await Usuario.findOne().where('idUser', idUser))
    })
}


export default initialize