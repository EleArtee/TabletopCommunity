const url = document.URL
const id = url.split("=")[url.split("=").length - 1];

const API_URL = 'http://localhost:8080/api/juego/' + id
const REVIEW_URL = 'http://localhost:8080/api/review'
let TAG_URL = 'http://localhost:8080/api/tag/'
const TG_URL = 'http://localhost:8080/api/taggame'

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("buttonrev");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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

    let media = 0;

    if (stars == 0){
        media = 0
    }
    else{
        media = stars/nReviews
    }

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

async function uploadReview(){
    const starsinput = document.getElementById("stars")
    const stars = starsinput.value;
    const textreviewinput = document.getElementById("reviewtext")
    const textreview = textreviewinput.value;

    const review ={
        estrellas: stars,
        cuerpo: textreview,
        idGame: id
    }

    newreview = JSON.stringify(review)

    const response = await fetch(REVIEW_URL, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: newreview
    })
    location.reload()
}


  getGame()