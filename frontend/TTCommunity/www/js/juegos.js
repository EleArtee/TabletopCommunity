const API_URL = 'http://localhost:8080/api/juego'
const TAG_URL = 'http://localhost:8080/api/tag'
const CORS = 'https://cors-anywhere.herokuapp.com/'

  async function allGames() {
    const response = await fetch(CORS+API_URL, {method: 'GET'})
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
    const response = await fetch(CORS+TAG_URL, {method: 'GET'})
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
  
/*     if (response) {
      hideloader();
    }

    show(data)

  } */

  /* function hideloader() {
    document.getElementById('loading').style.display = 'none';
  } */


 /*  function show(data) {
    console.log(data, ' inside show')
    const ul = document.getElementById('posts')
    const list = document.createDocumentFragment();
    let li = document.createElement('li');
    let title = document.createElement('h1');
    let body = document.createElement('p')
    data.map(function (post) {

      title.innerHTML = `${post.title}`;
      body.innerHTML = `${post.body}`;

      li.appendChild(title);
      li.appendChild(body);
      list.appendChild(li);

      // console.log(list)
      // console.log(li)
    })
    ul.appendChild(list);
  } */

    allGames()
    allTags()