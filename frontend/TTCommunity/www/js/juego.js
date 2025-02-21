const url = document.URL
const id = url.split("=")[url.split("=").length - 1];

const API_URL = 'http://localhost:8080/api/juego/' + id

console.log(API_URL)

  async function getGame() {
    const response = await fetch(API_URL, {method: 'GET'})
    let data = await response.json()
    console.log(response)
    console.log(data)

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
                        MEDIA
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

      let 
    }


  getGame()
