// Desafio clase 15 - AJAX & Fetch - APIs

//Creo varias constantes para consultar el DOM
const form = document.getElementById('idForm')
const botonNASA = document.getElementById('botonForm')
const divNASA = document.getElementById('divNASA')

//guardo la Key de la API de NASA en una constante
const NASA_KEY='5To4bt3q6D73xfS59PIWMHpG2J8DwfZOdNa1FE3f'

//Creo un form con submit
form.addEventListener('submit',(e)=>{
    e.preventDefault()                          //Lineas estandar del form.
    let datForm = new FormData(e.target)
    let fecha = datForm.get('fecha')            //guardo la fecha en una variable.

    form.reset()                                //Reseteo el form cuando le da submit.

    fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}&date=${fecha}`) //Utilizo el fetch, y le brindo la key y la fecha que se ingreso en el form.
    .then (respuesta=>respuesta.json())                                            //pido el json del fetch
    .then (({explanation, url, title, date})=>{                                    //del json extraigo los elementos que me interesan.
        
        //Agrego la información manipulando un poquito el DOM y le paso los parámetros que quiero que me muestre.
        divNASA.innerHTML=`
                        <div class="container text-center">                        
                            <div class="row">
                                <h3>${title}</h3>
                                <h4>${date}</h4>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <img src="${url}" height=600 width=800 class="img-fluid rounded float-start border">
                                </div>
                                <div class="col">
                                    <p class="p">${explanation}</p>
                                </div>
                            </div>
                        </div>`
    })

})