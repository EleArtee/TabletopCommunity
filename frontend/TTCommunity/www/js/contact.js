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
    }
    else{
        signup.classList.add("hidden")
        login.classList.add("hidden")
        profile.classList.remove("hidden")
        logout.classList.remove("hidden")
    }
  }

checkLogging()