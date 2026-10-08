let stock = 30;
let continuar = true; 
let comprados = 0;

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

function comprarProducto() {
    let cantidad = parseInt(prompt("Ingresar la cantidad de productos que desea comprar:"));

    if (cantidad > 0 && cantidad <= stock) {
        stock = stock - cantidad;
        comprados = comprados + cantidad;
        alert("Compra realizada.");
    } else {
        alert("No hay suficiente stock.");
    }
}

function consultarStock() {
    alert("Quedan en stock " + stock + " productos.");
}

function verComprados() {
    alert("Usted tiene en el carrito: " + comprados + " productos.");
}

while (stock > 0 && continuar){

    let opcion = mostrarMenu();

    switch (opcion){
        case 1:
            comprarProducto();
        break;

        case 2:
            consultarStock();
        break;

        case 3:
            verComprados();
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
