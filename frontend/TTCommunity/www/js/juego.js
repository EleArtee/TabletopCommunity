const url = document.URL
const id = url.split("=")[url.split("=").length - 1];

const API_URL = 'http://localhost:8080/api/juego/' + id
const REVIEW_URL = 'http://localhost:8080/api/review'

console.log(API_URL)

  async function getGame() {
    const response = await fetch(API_URL, {method: 'GET'})
    let data = await response.json()
    console.log(response)
    console.log(data)

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
    }


  getGame()
