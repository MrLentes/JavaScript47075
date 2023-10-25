
function Luchador(nombre, nacionalidad, lesionado){
    this.nombre = nombre,
    this.nacionalidad = nacionalidad,
    this.lesionado = lesionado
}

function Programa(fecha, lugar, precioBase){
    this.fecha = fecha,
    this.lugar = lugar,
    this.precioBase = precioBase
}

const luchador = new Luchador("Mack (El Rayo) Reyna", "Uruguayo", false)
const luchador1 = new Luchador("Charlie Bullet", "Argentino", false)
const luchador2 = new Luchador("Comandante Fort", "Argentino", true)
const luchador3 = new Luchador("RAIJIN", "Argentino", false)
const luchador4 = new Luchador("Mascara Negra", "Mexicano", false)
const luchador5 = new Luchador("Leon Maldonado", "Argentino", false)
const luchador6 = new Luchador("Furia Sagrada jr.", "Uruguayo", true)
const luchador7 = new Luchador("Ivan (El Vikingo)", "Argentino", false)
const luchador8 = new Luchador("Angel Suarez", "Argentino", false)
const luchador9 = new Luchador("Payaso Gomez", "Paraguayo", false)

const luchadores = [luchador, luchador1, luchador2, luchador3, luchador4, luchador5, luchador6, luchador7, luchador8, luchador9]

const evento1 = new Programa('15/11/2023', "Lanus", 2500)
const evento2 = new Programa('25/11/2023', "LomasDeZamora", 2500)
const evento3 = new Programa('10/12/2023', "Tigre", 3000)
const evento4 = new Programa('21/12/2023', "Cordoba", 3250)
const evento5 = new Programa('1/1/2024', "CABA", 4500)
const evento6 = new Programa('15/1/2024', "Cordoba", 3000)
const evento7 = new Programa('27/1/2024', "CABA", 4000)
const evento8 = new Programa('9/2/2024', "Tigre", 3000)

const eventosProgramados = [evento1, evento2, evento3, evento4, evento5, evento6, evento7, evento8]

localStorage.setItem('luchadoresData', JSON.stringify(luchadores))
localStorage.setItem('eventosData', JSON.stringify(eventosProgramados))

const Carta = document.getElementById("carta")

document.getElementById("btnIniciarConsulta").addEventListener("click", ElegirConsulta)
//document.getElementById("btnIniciarConsulta").addEventListener("click", Eventos)
//document.getElementById("btnEventos").addEventListener("click", ElegirConsulta)

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

function Eventos(){
    Carta.innerHTML = "Eventos Programados y Boletos"
    eventosProgramados.forEach( (even) => Carta.append(even.fecha, even.lugar))
}

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
    entradaElegida.innerHTML = `<button id="btnTicketMaster">Comprar Entradas</button>`/*El boton te llevaria a Ticketmaster*/
    Carta.appendChild(entradaElegida)}

    //document.getElementById("btnGeneral").addEventListener("click", () => Carta.innerHTML = "La entrada cuesta " + entrada)
    document.getElementById("btnGeneral").addEventListener("click", General)
    document.getElementById("btnRingside").addEventListener("click", Ringside)
    document.getElementById("btnDePie").addEventListener("click", DePie)
}

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

function InfoLuchadores(){
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
}

//ElegirTarea()
