const API_URL = 'http://localhost:8080/api/juego'
let TAG_URL = 'http://localhost:8080/api/tag/'

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


    allGames()
    allTags()