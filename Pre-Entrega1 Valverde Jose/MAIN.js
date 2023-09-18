
function ElegirTarea(){
    alert("Por favor elija la consulta que desea hacer")
let tarea = parseInt(prompt("1.- Consultar los eventos programados. \n2.- Consultar el precio de entradas."))
switch(tarea){
    case 1:
        ConsultarFecha()
        break
    case 2:
        CalcularPrecio()
        break
    default:
        alert("Por favor ingrese un numero valido.")
        break
}
}

function ConsultarFecha(){
    alert("Hay eventos en Octubre y Noviembre")
    let elegirFecha
    do {
        elegirFecha = prompt("Elija que mes quiere consultar \n Octubre o Noviembre")
    } while (elegirFecha != "Octubre" && elegirFecha != "Noviembre")
    let fecha = elegirFecha == "Octubre" ? "13/10/2023 y 27/10/2023" : "08/11/2023";
    alert("Hay eventos en " + fecha)
}

function CalcularPrecio(){
    alert("Elija el tipo de entrada que desee consultar")
    let elegirEntrada
    do {
        elegirEntrada = prompt("Asientos Generales (General). \n Asientos Ringside (Ringside). \n De pie (Pie).")
    } while (elegirEntrada != "General" && elegirEntrada != "Ringside" && elegirEntrada != "Pie")
    let entrada = 2500
    if (elegirEntrada == "General") entrada *= 1
    else if (elegirEntrada == "Ringside") entrada *= 1.5
    else if (elegirEntrada == "Pie") entrada *= 0.70
    alert("La entrada cuesta " + entrada)
}

ElegirTarea()