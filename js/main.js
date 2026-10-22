//Funcion de inicio
function iniciarPrograma() {
    let stock = 30;
    let continuar = true;
    let comprados = 0;

    mientrasStock(stock, continuar, comprados);
}

//Menu de opciones
const mostrarMenu = () => {
    return parseInt(prompt(
        "Menu\n" +
        "1. Comprar productos\n" +
        "2. Consultar stock\n" +
        "3. Ver productos comprados\n" +
        "4. Salir\n\n" +
        "Ingrese una opcion:"
    ));
}

//Comprar productos
function comprarProducto(stock, comprados) {
    let cantidad = parseInt(prompt("Ingresar la cantidad de productos que desea comprar:"));

    if (cantidad > 0 && cantidad <= stock) {
        stock = stock - cantidad;
        comprados = comprados + cantidad;
        alert("Compra realizada.");
    } else {
        alert("No hay suficiente stock.");
    }
    return [stock, comprados];
}

//Consultar stock
function consultarStock(stock) {
    alert("Quedan en stock " + stock + " productos.");
}

//Ver productos comprados
function verComprados(comprados) {
    alert("Usted tiene en el carrito: " + comprados + " productos.");
}

//Funcion principal
function mientrasStock(stock, continuar, comprados) {

    while (stock > 0 && continuar){

    let opcion = mostrarMenu();

    switch (opcion){
        case 1:
            let resultado = comprarProducto(stock, comprados);
            stock = resultado[0];
            comprados = resultado[1];
        break;

        case 2:
            consultarStock(stock);
        break;

        case 3:
            verComprados(comprados);
        break;

        case 4:
            continuar = false;
            alert("Gracias por su compra.")
        break;

        default:
            alert("Opcion invalida.");
        break;
        }
    }
}

iniciarPrograma();
