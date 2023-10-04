
function Luchador(nombre, nacionalidad, lesionado){
    this.nombre = nombre,
    this.nacionalidad = nacionalidad,
    this.lesionado = lesionado
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

const luchadores = [luchador, luchador1, luchador2, luchador3, luchador4, luchador5, luchador6, luchador7, luchador8, luchador9];

function ElegirTarea(){
    alert("Por favor elija la consulta que desea hacer")
    let tarea = parseInt(prompt("1.- Consultar los eventos programados. \n2.- Consultar el precio de entradas. \n3.- Consultar informacion de los luchadores"))
    while (isNaN(tarea) || tarea === '' || tarea > 3 || tarea < 1){
    tarea = parseInt(prompt("Ingrese una opcion correcta. \n1.- Consultar los eventos programados. \n2.- Consultar el precio de entradas."))
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

function ConsultarFecha(){
    alert("Hay eventos en Octubre y Noviembre")
    let elegirFecha
    do {
        elegirFecha = prompt("Elija que mes quiere consultar \n Octubre o Noviembre").toLowerCase()
    } while (elegirFecha != "octubre" && elegirFecha != "noviembre")
    let fecha = elegirFecha == "octubre" ? "13/10/2023 y 27/10/2023" : "08/11/2023";
    alert("Hay eventos en " + fecha)
}

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

function InfoLuchadores(){
    alert("Que deseas consultar?")
    let info = parseInt(prompt("1.- Consultar los luchadores de la empresa. \n2.- Consultar los lucjadores lesionados."))
    while (isNaN(info) || info === '' || info > 2 || info < 1){
    info = parseInt(prompt("Ingrese una opcion correcta. \n1.- Consultar los luchadores de la empresa. \n2.- Consultar los lucjadores lesionados."))
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

ElegirTarea()
