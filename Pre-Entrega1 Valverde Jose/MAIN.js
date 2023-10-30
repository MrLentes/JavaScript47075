
function Luchador(nombre, nacionalidad, record, lesionado){
    this.nombre = nombre,
    this.nacionalidad = nacionalidad,
    this.record = record,
    this.lesionado = lesionado
}

const luchador = new Luchador("Mack (El Rayo) Reyna", "Uruguayo", '6 G/ 2 E/ 11 D', false)
const luchador1 = new Luchador("Charlie Bullet", "Argentino", '9 G/ 0 E/ 3 D', false)
const luchador2 = new Luchador("Comandante Fort", "Argentino", '3 G/ 0 E/ 14 D', true)
const luchador3 = new Luchador("RAIJIN", "Argentino", '12 G/ 0 E/ 0 D', false)
const luchador4 = new Luchador("Mascara Negra", "Mexicano", '11 G/ 0 E/ 6 D', false)
const luchador5 = new Luchador("Leon Maldonado", "Argentino", '7 G/ 1 E/ 11 D', false)
const luchador6 = new Luchador("Furia Sagrada jr.", "Uruguayo", '10 G/ 0 E/ 3 D', true)
const luchador7 = new Luchador("Ivan (El Vikingo)", "Argentino", '10 G/ 0 E/ 10 D', false)
const luchador8 = new Luchador("Angel Suarez", "Argentino", '11 G/ 0 E/ 8D', false)
const luchador9 = new Luchador("Payaso Gomez", "Paraguayo", '6 G/ 0 E/ 16 D', false)
const luchador10 = new Luchador("(El Cordoba) Rodrigo", "Argentino", '1 G/ 0 E/ 0 D', false)
const luchador11 = new Luchador("El Veterano", "Argentino", '13 G/ 1 E/ 15 D', true)

const luchadores = [luchador, luchador1, luchador2, luchador3, luchador4, luchador5, luchador6, luchador7, luchador8, luchador9, luchador10, luchador11]

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
Carta.style.backgroundColor = "#727a82"
Carta.style.border = "2px solid #369"
Carta.style.borderRadius = "10px"
Carta.style.color = "black"
Carta.style.fontSize = "20px"

document.getElementById("btnEventos").addEventListener("click", Eventos)
document.getElementById("btnLuchadores").addEventListener("click", Luchadores)

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
    localidades.style.border = "2px solid #369"
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
    div.style.backgroundColor = "#e7e7e7"
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

function Luchadores(){
    Carta.innerHTML = "Informacion de nuestros Luchadores" + "<p>" + "<p>"
    luchadores.forEach((luchador) => {
    const luchadorCarta = document.createElement("div")

    LuchadoresCss(luchadorCarta)

    const nombre = document.createElement("div")
    nombre.style.fontWeight = "bold"
    nombre.textContent = "Nombre: " + luchador.nombre

    const nacionalidad = document.createElement("div")
    nacionalidad.style.color = "#777"
    nacionalidad.textContent = "Nacionalidad: " + luchador.nacionalidad

    const record = document.createElement("div")
    record.style.color = "blue"
    record.textContent = luchador.record
    console.log(record)

    const lesionado = document.createElement("div")
    lesionado.style.fontWeight = "bold"
    lesionado.style.color = "red"
    lesionado.textContent = luchador.lesionado ? "Lesionado" : " "

    luchadorCarta.appendChild(nombre)
    luchadorCarta.appendChild(nacionalidad)
    luchadorCarta.appendChild(record)
    luchadorCarta.appendChild(lesionado)

    Carta.appendChild(luchadorCarta)
    })
}

function LuchadoresCss(cartaL){
    cartaL.style.backgroundColor = "white"
    cartaL.style.border = "1px solid #777"
    cartaL.style.borderRadius = "15px"
    cartaL.style.padding = "20px"
    cartaL.style.margin = "20px"
    cartaL.style.display = "inline-block"
    cartaL.style.textAlign = "left"
    cartaL.style.width = "300px"
}

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

//ElegirTarea()
