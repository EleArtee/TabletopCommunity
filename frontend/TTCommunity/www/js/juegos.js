const API_URL = 'http://localhost:8080/api/juego'
let TAG_URL = 'http://localhost:8080/api/tag/'

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

  async function allGames() {
    const response = await fetch(API_URL, {method: 'GET'})
    
    let data = await response.json()

    let placeholder = document.querySelector("#juegos");
    let out = "";
    for (let game of data){
      out +=`
        <a href="juego.html?id=${game.idGame}" class="gamelink"><div class="juego">
          <img class="imgjuego" src="${game.filename}" referrerpolicy="no-referrer" alt="">
          <h3 class="text">${game.nombre}</h3>
          <p class="text">media</p>
        </div></a>
      `;
    }

    placeholder.innerHTML = out;

  }

  async function allTags(){
    const response = await fetch(TAG_URL, {method: 'GET'})
    let data = await response.json()


    let taglist = document.querySelector('#taglist');
    let out = "";
    for (let tag of data){
      out +=`
        <li class="text tag"><input type="checkbox" id="c1"><label for="c1"> ${tag.nombre}</label></li>
      `
    }
    taglist.innerHTML = out;
  }

  checkLogging()
    allGames()
    allTags()