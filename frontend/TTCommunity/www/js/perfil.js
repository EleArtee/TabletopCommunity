const AUTH_URL = 'http://localhost:8080/api/auth/id'
const USER_URL = 'http://localhost:8080/api/usuario/'

async function desconectar(){
    localStorage.removeItem('token');
    window.location.href = "../html/index.html"
}

async function getProfile(){
    const token = localStorage.getItem('token')

    const tokenize = JSON.stringify({
        jwtoken: token
    })

    const resid = await fetch(AUTH_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: tokenize
    })

    let idUser = await resid.text();

    console.log(idUser)

    const NEOUSER_URL = USER_URL+idUser

    console.log(NEOUSER_URL)

    const response = await fetch(NEOUSER_URL, {method: 'GET'})
    let data = await response.json()

    let info = document.querySelector("#profile");
    let out1 = `
    <table>
        <tr>
            <th></th>
            <th class="text">${data.nick}</th>
        </tr>
        <tr>
            <td class="text">ID</td>
            <td class="text">${data.idUser}</td>
        </tr>
        <tr>
            <td class="text">Email</td>
            <td class="text">${data.email}</td>
        </tr>
        <tr>
            <td class="text">Contraseña</td>
            <td class="text">${data.contrasena}</td>
        </tr>
    </table>`

    info.innerHTML = out1;
}

getProfile()