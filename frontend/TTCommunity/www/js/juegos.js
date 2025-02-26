const API_URL = 'http://localhost:8080/api/juego'
let TAG_URL = 'http://localhost:8080/api/tag/'
const REVIEW_URL = 'http://localhost:8080/api/review'

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

  async function allGames() {
    const response = await fetch(API_URL, {method: 'GET'})
    let data = await response.json()

    const resp = await fetch(REVIEW_URL, {method: 'GET'})
    let redata = await resp.json()

    let placeholder = document.querySelector("#juegos");
    let out = "";

    let stars = 0;
    let nReviews = 0;

   
    for (let game of data){
      for (let review of redata){
        if (review.idGame == game.idGame){
            stars += review.estrellas
            nReviews += 1
            console.log(stars)
        }
    }

    let media = 0;

    if (stars == 0){
        media = 0
    }
    else{
        media = stars/nReviews
    }

      out +=`
        <a href="juego.html?id=${game.idGame}" class="gamelink"><div class="juego">
          <img class="imgjuego" src="${game.filename}" referrerpolicy="no-referrer" alt="">
          <h3 class="text">${game.nombre}</h3>
          <p class="text">${media}</p>
        </div></a>
      `;
      media = 0;
      stars = 0;
      nReviews = 0;
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