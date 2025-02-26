async function desconectar(){
    localStorage.removeItem('token');
    window.location.href = "../html/index.html"
}

async function checkLogging(){
    const AUTH_URL = 'http://localhost:8080/api/auth'
  
    const token = localStorage.getItem('token')
    const signup = document.getElementById("signuplink");
    const login = document.getElementById("loginlink")
    const profile = document.getElementById("profilink");
    const logout = document.getElementById("logoutlink")
  
    const tokenize = JSON.stringify({
        jwtoken: token
    })
    let expirecheck = "";
    let expire = "";

    if(token != null){
        expirecheck = await fetch(AUTH_URL + '/expire', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body: tokenize
            })
        expire = await expirecheck.json()
    }
    else{
        expire = true
    }
  
    if(expire == true){
        signup.classList.remove("hidden")
        login.classList.remove("hidden")
        profile.classList.add("hidden")
        logout.classList.add("hidden")
    }
    else{
        signup.classList.add("hidden")
        login.classList.add("hidden")
        profile.classList.remove("hidden")
        logout.classList.remove("hidden")
    }
  }

checkLogging()