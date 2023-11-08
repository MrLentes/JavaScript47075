
function Luchador(nombre, nacionalidad, finisher, record, lesionado, campeon){
    this.nombre = nombre,
    this.nacionalidad = nacionalidad,
    this.finisher = finisher,
    this.record = record,
    this.lesionado = lesionado,
    this.campeon = campeon
}

const lucha1 = new Luchador("Charlie Bullet", "Argentino", "BuckShot", '9 G/ 0 E/ 3 D', false)
const lucha2 = new Luchador("Comandante Fort", "Argentino", "Quebradora Argentina", '3 G/ 0 E/ 14 D', true)
const lucha3 = new Luchador("RAIJIN", "Argentino", "TAIKO", '10 G/ 0 E/ 0 D', false)
const lucha4 = new Luchador("Mascara Negra", "Mexicano", "Muerte Negra", '11 G/ 0 E/ 6 D', false, "Campeon PWND Junior")
const lucha5 = new Luchador("Leon Maldonado", "Argentino", "LionTamer", '7 G/ 1 E/ 11 D', false)
const lucha6 = new Luchador("Furia Sagrada jr.", "Uruguayo", "FURIA", '10 G/ 0 E/ 3 D', true)
const lucha7 = new Luchador("Ivan (El Vikingo)", "Argentino", "Niflheim", '10 G/ 0 E/ 10 D', false)
const lucha8 = new Luchador("Angel Suarez", "Argentino", "One Winged Angel", '11 G/ 0 E/ 8 D', false)
const lucha9 = new Luchador("Payaso Gomez", "Paraguayo", "PunchLine", '6 G/ 0 E/ 10 D', false)
const lucha10 = new Luchador("Mack (El Rayo) Reyna", "Uruguayo", "Lightning Drop", '10 G/ 2 E/ 11 D', false, "Campeon en Parejas PWND")
const lucha11 = new Luchador("El Veterano", "Argentino", "Viejos Tiempos", '13 G/ 1 E/ 15 D', true)
const lucha12 = new Luchador("White BULL", "Mexicano", "BOOMbazo", '18 G/ 1 E/ 2 D', false, "Campeon PWND")
const lucha13 = new Luchador("Carlos Strong", "Argentino", "Lanza Strong", '8 G/ 0 E/ 12 D', false)
const lucha14 = new Luchador("El Oriental", "Uruguayo", "KillSwitch", '11 G/ 1 E/ 5 D', false, "Campeon en Parejas PWND")
const lucha15 = new Luchador("Jaime Halcon", "Argentino", "Cetreria", '2 G/ 0 E/ 8 D', false)
const lucha16 = new Luchador("MALLKU", "Boliviano", "Kharisiri", '7 G/ 0 E/ 4 D', false)
const lucha17 = new Luchador("D.A.G.A.", "Argentino", "Dragon Sleeper", '6 G/ 0 E/ 1 D', false)
const lucha18 = new Luchador("RUSHER", "Argentino", "La Adrenalina", '3 G/ 0 E/ 1 D', true)
const lucha19 = new Luchador("Santiago de Santiago", "Chileno", "Ushigoroshi", '1 G/ 0 E/ 2 D', false)
const lucha20 = new Luchador("(El Cordoba) Rodrigo", "Argentino", "Potro Volador", '1 G/ 0 E/ 0 D', false)

const luchadores = [lucha1, lucha2, lucha3, lucha4, lucha5, lucha6, lucha7, lucha8, lucha9, lucha10, lucha11, lucha12, lucha13, lucha14, lucha15, lucha16, lucha17, lucha18, lucha19, lucha20]

localStorage.setItem('luchadoresData', JSON.stringify(luchadores))

function Programa(fecha, lugar, local, precioBase){
    this.fecha = fecha,
    this.lugar = lugar,
    this.local = local,
    this.precioBase = precioBase
}

const evento1 = new Programa('15/11/2023', "Lanus", "Microestadio de Lanus", 2500)
const evento2 = new Programa('25/11/2023', "Temperley", "Auditorio Sur", 2500)
const evento3 = new Programa('10/12/2023', "Rosario", "Anfiteatro Humberto de Nito", 3200)
const evento4 = new Programa('21/12/2023', "Cordoba", "Teatro Real", 3250)
const evento5 = new Programa('01/01/2024', "CABA", "Teatro Flores", 4500)
const evento6 = new Programa('15/01/2024', "Cordoba", "Quality Espacio", 3000)
const evento7 = new Programa('27/01/2024', "CABA", "Teatro Ópera Orbis", 4000)
const evento8 = new Programa('09/02/2024', "CABA", "La Trastienda", 3000)

const eventos = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]

localStorage.setItem('eventosData', JSON.stringify(eventos))

const Carta = document.getElementById("carta")
Carta.style.padding = "15px"
Carta.style.backgroundColor = "gray"
Carta.style.border = "2px solid blue"
Carta.style.borderRadius = "10px"
Carta.style.color = "black"
Carta.style.fontSize = "20px"

anime.timeline({
    loop: false,
  })
    .add({
      targets: '#PWND',
      opacity: 1,
      duration: 1000,
      delay: 250,
      easing: 'easeInOutQuad',
    })
    .add({
      targets: '#PWND',
      strokeDashoffset: [anime.setDashoffset, 1],
      easing: 'easeInOutSine',
      duration: 5000,
    });

const cartaNoticia = document.getElementById("cartaNoticia")
const tituloNoticia = document.getElementById("tituloNoticia")
const articuloNoticia = document.getElementById("articuloNoticia")
const btnVolverNoticias = document.getElementById("btnVolver")

document.getElementById("btnEventos").addEventListener("click", Eventos)
document.getElementById("btnLuchadores").addEventListener("click", Luchadores)
document.getElementById("btnNoticias").addEventListener("click", MostrarNoticias)
document.getElementById("btnTienda").addEventListener("click", MostrarTienda)

function Eventos(){
    Carta.innerHTML = "Eventos Programados y Boletos" + "<p>"
    for(let i = 0; i < eventos.length; i++){
        let datos = document.createElement("div")
        datos.innerHTML = eventos[i].fecha + " " + eventos[i].lugar + " / " + eventos[i].local
        console.log(datos)
        let ticket = document.createElement("button")
        ticket.id = "btnComprarBoletos" + i
        ticket.textContent = "Comprar Boletos"
        ticket.addEventListener("click", function(){ CompraBoletos(eventos[i])})
        Carta.appendChild(datos)
        Carta.appendChild(ticket)
        EventosCss(datos, ticket)
    }
}

function CompraBoletos(base){
    Carta.innerHTML = "Evento " + base.fecha + " " + base.lugar + " / " + base.local
    let localidades = document.createElement("div")
    localidades.style.padding = "15px"
    localidades.style.backgroundColor = "black"
    localidades.style.border = "2px solid blue"
    localidades.style.borderRadius = "10px"
    localidades.style.color = "white"
    localidades.style.fontSize = "22px"
    localidades.style.fontWeight = "bold"
    localidades.innerHTML = `<p>Entradas Generales - Precio ` + base.precioBase + `<button id="btnComprarBoletosG"> Comprar en TicketMaster </button>` + 
    `<p>Entradas Ringside - Precio ` + base.precioBase * 1.5 + `<button id="btnComprarBoletosR"> Comprar en TicketMaster </button>` + 
    `<p>Entradas De Pie - Precio ` + base.precioBase * 0.7 + `<button id="btnComprarBoletosP"> Comprar en TicketMaster </button>`
    //Los botones te llevarian a TicketMaster
    Carta.appendChild(localidades)
}

function EventosCss(div, button){
    div.style.padding = "15px"
    div.style.backgroundColor = "white"
    div.style.border = "2px solid #369"
    div.style.borderRadius = "10px"
    div.style.color = "black"

    button.style.backgroundColor = "#48b8b8"
    button.style.color = "black"
    button.style.borderRadius = "10px"
    button.style.padding = "10px 20px"
    button.style.cursor = "pointer"
    button.style.fontSize = "18px"
    button.addEventListener("mouseover", function () { button.style.backgroundColor = "#0056b3" })
    button.addEventListener("mouseout", function () { button.style.backgroundColor = "#48b8b8" })
}





function Luchadores() {
    Carta.innerHTML = "Informacion de nuestros Luchadores" + "<p>" + "<p>"
    luchadores.forEach((luchador) => {
        const luchadorCarta = document.createElement("div")

        LuchadoresCss(luchadorCarta)

        const nombre = document.createElement("div")
        nombre.style.fontWeight = "bold"
        nombre.style.cursor = "pointer"
        nombre.textContent = "Nombre: " + luchador.nombre

        const datosOcultos = document.createElement("div")
        datosOcultos.style.height = "0"
        datosOcultos.style.opacity = 0
        datosOcultos.style.overflow = "hidden"
        datosOcultos.style.transition = "height 0.5s, opacity 0.5s"

        const nacionalidad = document.createElement("div")
        nacionalidad.style.color = "#666666"
        nacionalidad.textContent = "Nacionalidad: " + luchador.nacionalidad

        const remate = document.createElement("div")
        remate.style.color = "green"
        remate.textContent = "Remate: " + luchador.finisher

        const record = document.createElement("div")
        record.style.color = "blue"
        record.textContent = "Record: " + luchador.record

        const lesionado = document.createElement("div")
        lesionado.style.fontWeight = "bold"
        lesionado.style.color = "red"
        lesionado.textContent = luchador.lesionado ? "Lesionado" : " "

        const campeon = document.createElement("div")
        campeon.style.fontWeight = "bold"
        campeon.style.color = "orange"
        campeon.textContent = luchador.campeon != null ? luchador.campeon : " "

        datosOcultos.appendChild(nacionalidad)
        datosOcultos.appendChild(remate)
        datosOcultos.appendChild(record)
        datosOcultos.appendChild(lesionado)
        datosOcultos.appendChild(campeon)

        luchadorCarta.appendChild(nombre)
        luchadorCarta.appendChild(datosOcultos)

        nombre.addEventListener("click", function () {
            if (datosOcultos.style.height === "0px") {
                anime({
                    targets: datosOcultos,
                    height: datosOcultos.scrollHeight + "px",
                    opacity: 1,
                    duration: 200,
                    easing: 'easeInOutQuad',
                })
            } else {
                anime({
                    targets: datosOcultos,
                    height: "0px",
                    opacity: 0,
                    duration: 200,
                    easing: 'easeInOutQuad',
                })
            }
        })

        Carta.appendChild(luchadorCarta)
    })
}



function LuchadoresCss(cartaL){
    cartaL.style.backgroundColor = "white"
    cartaL.style.border = "2px solid blue"
    cartaL.style.borderRadius = "15px"
    cartaL.style.padding = "20px"
    cartaL.style.margin = "20px"
    cartaL.style.display = "inline-block"
    cartaL.style.textAlign = "left"
    cartaL.style.width = "300px"
}

async function MostrarNoticias() {
    Carta.innerHTML = "";

    fetch("noticias.json")
    .then(response => response.json())
    .then(data => {
    const Noticias = data.noticias

    Noticias.forEach((noticia) => {
        const noticiaCarta = document.createElement("div")
        noticiaCarta.style.backgroundColor = "white"
        noticiaCarta.style.border = "2px solid blue"
        noticiaCarta.style.borderRadius = "15px"
        noticiaCarta.style.padding = "20px"
        noticiaCarta.style.margin = "20px"
        noticiaCarta.style.textAlign = "center"

        const titulo = document.createElement("h2")
        titulo.style.cursor = "pointer"
        titulo.textContent = noticia.tit

        const descripcion = document.createElement("p")
        descripcion.style.color = "#666666"
        descripcion.textContent = noticia.des

        noticiaCarta.appendChild(titulo)
        noticiaCarta.appendChild(descripcion)

        titulo.addEventListener("click", function () {
            tituloNoticia.textContent = noticia.tit
            articuloNoticia.textContent = noticia.not
            articuloNoticia.innerHTML = noticia.not.replace(/\n/g, '<p>')
            cartaNoticia.style.display = "block"
            Carta.style.display = "none"
            cartaNoticia.style.padding = "15px"
            cartaNoticia.style.backgroundColor = "#b3b3b3"
            cartaNoticia.style.border = "2px solid blue"
            cartaNoticia.style.borderRadius = "10px"
            cartaNoticia.style.color = "black"
            cartaNoticia.style.fontSize = "23px"
            
        })

        Carta.appendChild(noticiaCarta)
    })
    
    btnVolverNoticias.addEventListener("click", function () {
        cartaNoticia.style.display = "none"
        Carta.style.display = "block"
    })
    })
}

function MostrarTienda(){
    Carta.innerHTML = ""
    fetch("tienda.json")
    .then(response => response.json())
    .then(data => {
    const productos = data.tienda
    productos.forEach((producto) => {
        const productoCarta = document.createElement("div")
        productoCarta.className = "producto-carta"
        productoCarta.style.backgroundColor = "white"
        productoCarta.style.border = "2px solid blue"
        productoCarta.style.borderRadius = "15px"
        productoCarta.style.padding = "20px"
        productoCarta.style.margin = "20px"
        productoCarta.style.textAlign = "center"

        const nombreProducto = producto.tipo + " " + producto.diseño + " " + producto.luchador
        const btnProducto = document.createElement("button")
        btnProducto.textContent = producto.colores ? "Elegir Color" : "Agregar al Carrito"




        btnProducto.addEventListener("click", function () {
            if (producto.colores) {
                //mostrar colores
                //mostrar los colores disponibles y usar el boton agregar al carrito
                //usar la funcion para confirmar agregar al carrito
            } else {
                //una funcion para confirmar que se agrega al carrito
            }
        })

        productoCarta.appendChild(document.createTextNode(nombreProducto))
        productoCarta.appendChild(document.createElement("br"))
        productoCarta.appendChild(btnProducto)

        Carta.appendChild(productoCarta)
    })
}
)}


function agregarAlCarrito(item) {
    let carrito = JSON.parse(sessionStorage.getItem('carritoData')) || []
    carrito.push(item);
    sessionStorage.setItem('carritoData', JSON.stringify(carrito))
}

const btnVerCarrito = document.getElementById("carrito")
btnVerCarrito.addEventListener("click", mostrarCarrito)

function mostrarCarrito() {
    const carrito = JSON.parse(sessionStorage.getItem('carritoData'))
    if (carrito && carrito.length > 0) {
        Carta.innerHTML = "Productos en el carrito:\n" + carrito.join("\n")
    } else {
        Carta.innerHTML = "El carrito está vacío."
    }
}





    //usando anime.js
  /*anime.timeline({
    loop: false,
  })
    .add({
      targets: 'button',
      opacity: 1,
      duration: 1000,
      easing: 'easeInOutQuad',
    })
    .add({
      targets: 'button',
      strokeDashoffset: [anime.setDashoffset, 1],
      easing: 'easeInOutSine',
      duration: 5000,
    });*/



    
//document.getElementById("btnIniciarConsulta").addEventListener("click", ElegirConsulta)
/*
function ElegirConsulta(){
    Carta.innerHTML = ""
    const consultas = document.createElement("div")
    consultas.innerHTML = `
        <p>Por favor elija la consulta que desea hacer:</p>
        <button id="btnEventos"> Consultar eventos programados</button>
        <button id="btnPrecio"> Consultar precio de entradas</button>
        <button id="btnLuchadores"> Consultar información de los luchadores</button>
    `
    Carta.appendChild(consultas)

    document.getElementById("btnEventos").addEventListener("click", ConsultarEventos)
    document.getElementById("btnPrecio").addEventListener("click", PrecioDeEntradas)
    document.getElementById("btnLuchadores").addEventListener("click", InfoLuchadores)
}

function ConsultarEventos(){
    Carta.innerHTML = "Hay eventos en Octubre y Noviembre"
    const eventoElegido = document.createElement("div")
    eventoElegido.innerHTML = `
        <p>Elija que mes que quiere consultar:</p>
        <button id = "btnOctubre">Octubre</button>
        <button id = "btnNoviembre">Noviembre</button>
    `
    Carta.appendChild(eventoElegido)
    
    let octubre = "Hay eventos en 13/10/2023 y 27/10/2023"
    let noviembre = "Hay eventos en 08/11/2023"
    document.getElementById("btnOctubre").addEventListener("click", () => Carta.innerHTML = octubre)
    document.getElementById("btnNoviembre").addEventListener("click", () => Carta.innerHTML = noviembre)
}

function PrecioDeEntradas(){
    Carta.innerHTML = "Elija el tipo de entrada que desee consultar"
    const entradaElegida = document.createElement("div")
    entradaElegida.innerHTML = `
        <button id="btnGeneral">Asientos Generales</button>
        <button id="btnRingside">Asientos Ringside</button>
        <button id="btnDePie">De pie</button>
    `
    Carta.appendChild(entradaElegida)
    let entrada = 2500

    let General = () => {Carta.innerHTML = "La entrada cuesta " + entrada
    entradaElegida.innerHTML = `<button id="btnTicketMaster">Comprar Entradas</button>`
    Carta.appendChild(entradaElegida)}

    let Ringside = () => {Carta.innerHTML = "La entrada cuesta " + entrada * 1.5
    entradaElegida.innerHTML = `<button id="btnTicketMaster">Comprar Entradas</button>`
    Carta.appendChild(entradaElegida)}
    
    let DePie = () => {Carta.innerHTML = "La entrada cuesta " + entrada * 0.7
    entradaElegida.innerHTML = `<button id="btnTicketMaster">Comprar Entradas</button>`/*El boton te llevaria a Ticketmaster
    Carta.appendChild(entradaElegida)}

    //document.getElementById("btnGeneral").addEventListener("click", () => Carta.innerHTML = "La entrada cuesta " + entrada)
    document.getElementById("btnGeneral").addEventListener("click", General)
    document.getElementById("btnRingside").addEventListener("click", Ringside)
    document.getElementById("btnDePie").addEventListener("click", DePie)
}
*/

/*
document.getElementById("btnConsultarEventos").addEventListener("click", ConsultarFecha)
document.getElementById("btnConsultarEntradas").addEventListener("click", CalcularPrecio)
document.getElementById("btnConsultarLuchadores").addEventListener("click", InfoLuchadores)

/* Reemplazado

function ElegirTarea(){
    alert("Por favor elija la consulta que desea hacer")
    let tarea = parseInt(prompt("1.- Consultar los eventos programados. \n2.- Consultar el precio de entradas. \n3.- Consultar informacion de los luchadores"))
    while (isNaN(tarea) || tarea === '' || tarea > 3 || tarea < 1){
    tarea = parseInt(prompt("Ingrese una opcion correcta. \n1.- Consultar los eventos programados. \n2.- Consultar el precio de entradas. \n3.- Consultar informacion de los luchadores"))
    }
    switch(tarea){
        case 1:
            ConsultarFecha()
            break
        case 2:
            CalcularPrecio()
            break
        case 3:
            InfoLuchadores()    
        default:
            alert("Por favor ingrese un numero valido.")
            break
    }
}

*/

/* Reemplazado
function ConsultarFecha(){
    alert("Hay eventos en Octubre y Noviembre")
    let elegirFecha
    do {
        elegirFecha = prompt("Elija que mes quiere consultar \n Octubre o Noviembre").toLowerCase()
    } while (elegirFecha != "octubre" && elegirFecha != "noviembre")
    let fecha = elegirFecha == "octubre" ? "13/10/2023 y 27/10/2023" : "08/11/2023";
    alert("Hay eventos en " + fecha)
}
*/

/*Reemplazado
function CalcularPrecio(){
    let elegirEntrada
    do {
        elegirEntrada = prompt("Elija el tipo de entrada que desee consultar. \nAsientos Generales (General). \n Asientos Ringside (Ringside). \n De pie (Pie).").toLowerCase()
    } while (elegirEntrada != "general" && elegirEntrada != "ringside" && elegirEntrada != "pie")
    let entrada = 2500
    if (elegirEntrada == "general") entrada *= 1
    else if (elegirEntrada == "ringside") entrada *= 1.5
    else if (elegirEntrada == "pie") entrada *= 0.70
    alert("La entrada cuesta " + entrada + "$")
}
*/

/*function InfoLuchadores(){
    alert("Que deseas consultar?")
    let info = parseInt(prompt("1.- Consultar los luchadores de la empresa. \n2.- Consultar los luchadores lesionados."))
    while (isNaN(info) || info === '' || info > 2 || info < 1){
    info = parseInt(prompt("Ingrese una opcion correcta. \n1.- Consultar los luchadores de la empresa. \n2.- Consultar los luchadores lesionados."))
    }
    if (info == 1) MostrarInfo()
    else if (info == 2) InfoLesionados()
}
function MostrarInfo(){
    for (let i = 0; i < luchadores.length; i++){
        alert("Nombre: " + luchadores[i].nombre + "\nNacionalidad: " + luchadores[i].nacionalidad)}
    alert("Gracias por su consulta")    
}
function InfoLesionados(){
    const lesionados = []
    luchadores.forEach( (lucha) => {if(lucha.lesionado) lesionados.push(lucha.nombre)} )
    alert("Los lesionados son: ")
    for (let i = 0; i < lesionados.length; i++){
        alert(lesionados[i])
    }
}*/

//ElegirTarea()*/
