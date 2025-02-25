USER_URL = "http://localhost:8080/api/usuario";

async function signup(){
    const nickinput = document.getElementById("fnick");
    const nick = nickinput.value;
    const emailinput = document.getElementById("femail");
    const email = emailinput.value;
    const passinput = document.getElementById("fpassw");
    const pass = passinput.value;

    const user = {
        nick: nick,
        email: email,
        contrasena: pass
    }

    newuser = JSON.stringify(user)

    const response = await fetch(USER_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: newuser
    })

    window.location.href = "../html/login.html"
    console.log("Hemos llegao")

}
