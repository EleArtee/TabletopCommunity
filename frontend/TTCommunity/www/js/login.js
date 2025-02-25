AUTH_URL = "http://localhost:8080/api/auth"
HASH_URL = "http://localhost:8080/api/auth/hash"
USER_URL = "http://localhost:8080/api/usuario";


async function login(){
    const emailinput = document.getElementById("femail");
    const email = emailinput.value;
    const passinput = document.getElementById("fpassw");
    const pass = passinput.value;

    const usercred = {
        email: email,
        contrasena: pass
    }
    
    checkuser = JSON.stringify(usercred)

    const answer = await fetch(HASH_URL, 
        {method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: checkuser}
    )

    let booli = await answer.json()

    const usearch = await fetch(USER_URL, {method:'GET'})
    let data = await usearch.json()
    let idUser = 0;
    let nickUser = "";
    let activator = false;

    for (let user of data){
        if (user.email == email){
            idUser = user.idUser
            nickUser = user.nick
            if(booli == true){
                activator = true;
            }
            else{
                alert("La contraseña es incorrecta")
            }
        }
    }

    if(idUser == 0){
        alert('No existe un usuario con este correo')}

    if(activator == true){
        const user = {
            id: idUser,
            nick: nickUser
        }
        const restoken = await fetch(AUTH_URL, 
            {method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: user})
        let token = await restoken.json()
        localStorage.setItem('token', token);
        window.location.href = "../html/index.html"
    }

    console.log("Hemos llegao")
/*     const userfind = await fetch (API_URL+idUser, {method: 'GET'})
    let user = await response.json()  */
}