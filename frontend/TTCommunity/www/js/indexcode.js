
async function checkLogging(){
    const AUTH_URL = 'http://localhost:8080/api/auth'

    const token = localStorage.getItem('token')
    const signup = document.getElementById("signuplink");
    const login = document.getElementById("loginlink")
    const profile = document.getElementById("profilink");
    const logout = document.getElementById("logoutlink")
    const unlogwelc = document.getElementById("unlogwelc");
    const logwelc = document.getElementById("logwelc")

    const tokenize = JSON.stringify({
        jwtoken: token
    })
    const expirecheck = await fetch(AUTH_URL + '/expire', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
        body: tokenize
    })

    let expire = await expirecheck.json()

    if(token == null || expire == true){
        signup.classList.remove("hidden")
        login.classList.remove("hidden")
        profile.classList.add("hidden")
        logout.classList.add("hidden")
        unlogwelc.classList.remove("hidden")
        logwelc.classList.add("hidden")
    }
    else{
        const resid = await fetch(AUTH_URL + '/nick', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: tokenize
        })
    
        let nickUser = await resid.text();

        signup.classList.add("hidden")
        login.classList.add("hidden")
        profile.classList.remove("hidden")
        logout.classList.remove("hidden")
        unlogwelc.classList.add("hidden")
        logwelc.classList.remove("hidden")

        let welcomeuser = document.getElementById(welcuser)
        let out = `<p class = "welcome text w-text">Encantados de tenerte de vuelta ${nickUser}</p>`
        welcomeuser.innerHTML = out
    }
}

checkLogging()