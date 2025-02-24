const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


USER_URL = "http://localhost:8080/api/usuario";

function generateToken(json){

}
async function login(){
    const emailinput = document.getElementById("femail");
    const email = emailinput.value;
    const passinput = document.getElementById("fpassw");
    const pass = passinput.value;

    const usearch = await fetch(USER_URL, {method: 'GET'})
    let data = await usearch.json()
    let idUser = 0;
    let salt = 2;
    const hashpass = bcrypt.hashSync(pass, salt);
    console.log(hashpass)

    for (let user of data){
        console.log(typeof user)
        if (user.email == email){
            idUser = user.idUser
            if(user.contrasena == hashpass){
                console.log("wi")
            }
            else{
                alert("La contraseña es incorrecta")
            }
        }
        else {
            alert("No existe un usuario con este correo")
        }
    }

    const userfind = await fetch (API_URL+idUser, {method: 'GET'})
    let user = await response.json()
}