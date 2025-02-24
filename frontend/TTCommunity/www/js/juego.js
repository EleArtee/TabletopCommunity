const url = document.URL
const id = url.split("=")[url.split("=").length - 1];

const API_URL = 'http://localhost:8080/api/juego/' + id
const REVIEW_URL = 'http://localhost:8080/api/review'
let TAG_URL = 'http://localhost:8080/api/tag/'
const TG_URL = 'http://localhost:8080/api/taggame'



console.log(API_URL)

  async function getGame() {
    const response = await fetch(API_URL, {method: 'GET'})
    let data = await response.json()
    console.log(response)
    console.log(data)

    const tagsresp = await fetch(TAG_URL, {method: 'GET'});
    let tags = await tagsresp.json()

    const tagsgresp = await fetch(TG_URL, {method: 'GET'});
    let tgs = await tagsgresp.json()

    const resp = await fetch(REVIEW_URL, {method: 'GET'})
    let redata = await resp.json()

    let stars = 0;
    let nReviews = 0;

    for (let review of redata){
        if (review.idGame == id){
            stars += review.estrellas
            nReviews += 1
            console.log(stars)
        }
    }
    console.log(stars)
    console.log(nReviews)

    let media = stars/nReviews

    let basic = document.querySelector("#basicdata");
    let out1 = `
            <img id="gamepic" src="${data.filename}" alt="">
            <table id="info"> 
                <tr>
                    <td class="baseinfo text">
                    ${data.nombre}
                    </td>
                </tr>
                <tr>
                    <td class="baseinfo text">
                    ${data.editorial}
                    </td>
                </tr>
                <tr>
                    <td class="baseinfo text">
                        ${media}
                    </td>
                </tr>
                <tr>
                    <td class="baseinfo text" id="end">
                    ${data.precio} euros
                    </td>
                </tr>
            </table>
      `;
    basic.innerHTML = out1;
    
    let desc = document.querySelector("#desc");
    let out2 = `<p class="text desc">${data.descripcion}</p>`
    desc.innerHTML = out2;

    let reviews = document.querySelector("#review");
    let out3 = "";
    for (let review of redata){
        if (review.idGame == id){
           out3 += `<table class="text">
                        <tr>
                            <td class="star">${review.estrellas}</td>
                        </tr>
                        <tr>
                            <td>${review.cuerpo}</td>
                        </tr>
                    </table>`;
        }
    }
    console.log(out3)
    reviews.innerHTML = out3;

    let etiquetas = document.querySelector("#tags");
    let out4 = "";
    for (let tg of tgs){
        if (tg.juegoIdGame == id){
            let etiqueta = TAG_URL + tg.tagIdTag
            const tagr = await fetch(etiqueta, {method: 'GET'});
            let tags = await tagr.json()
            out4 += `<li class="tag text">${tags.nombre}</li>`
        }
    }
    etiquetas.innerHTML = out4;
    }


  getGame()