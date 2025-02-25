AUTH_URL = "http://localhost:8080/api/auth"
HASH_URL = "http://localhost:8080/api/auth/hash"
USER_URL = "http://localhost:8080/api/usuario";


async function login(){
    const emailinput = document.getElementById("femail");
    const email = emailinput.value;
    const passinput = document.getElementById("fpassw");
    const pass = passinput.value;

    const user = {
        email: email,
        contrasena: pass
    }
    
    checkuser = JSON.stringify(user)

    const answer = await fetch(HASH_URL, 
        {method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: checkuser}
    )

    console.log(answer);
    console.log(typeof answer);

    const usearch = await fetch(USER_URL, {method:'GET'})
    let data = await usearch.json()
    let idUser = 0;

    for (let user of data){
        if (user.email == email){
            idUser = user.idUser
            if(answer){
                console.log("wi")
            }
            else{
                alert("La contraseña es incorrecta")
            }
        }
    }
    alert('No existe un usuario con este correo')
    console.log("Hemos llegao")
/*     const userfind = await fetch (API_URL+idUser, {method: 'GET'})
    let user = await response.json()  */
}