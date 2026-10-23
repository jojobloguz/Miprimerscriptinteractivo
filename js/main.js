//Funcion de inicio
function iniciarPrograma() {
    const productosEnStock = ["Remera", "Pantalon", "Zapatillas", "Campera", "Buzo"];
    let continuar = true;
    let comprados = [];

    mientrasStock(productosEnStock, continuar, comprados);
}

//Menu de opciones
const mostrarMenu = () => {
    return parseInt(prompt(
        "Menu\n" +
        "1. Comprar productos\n" +
        "2. Consultar stock\n" +
        "3. Ver productos comprados\n" +
        "4. Eliminar ultimo producto comprado\n" +
        "5. Salir\n\n" +
        "Ingrese una opcion:"
    ));
}

//Comprar productos
function comprarProducto(productosEnStock, comprados) {
    let buscado = prompt("¿Que producto desea comprar?")
    if (productosEnStock.includes(buscado)){
        const posicion = (productosEnStock.indexOf(buscado));
        let productoComprado = productosEnStock.splice(posicion, 1)[0];
        comprados.push(productoComprado);
        alert(`Compraste: ${productoComprado}`)
    }   else{
        alert('El producto no se encuentra en stock o esta agotado.')
    }
}

//Consultar stock
function consultarStock(productosEnStock) {
    if (productosEnStock.length === 0){
        alert("No quedan productos en stock.");
        return;
    }
    let mensaje = "Productos Disponibles:\n";
    for(productos of productosEnStock){
        mensaje += `-${productos}\n`
    }
    alert(mensaje);
}

//Ver productos comprados
function verComprados(comprados) {
    if(comprados.length === 0){
        alert("Tu carrito esta vacio.");
        return;
    }
    let mensaje = "Tu carrito contiene:\n"
    for(productos of comprados){
        mensaje += `-${productos}\n`
    }
    alert(mensaje)
}

//Eliminar ultimo producto
function eliminarUltimoProducto(comprados) {
    if(comprados.length === 0){
        alert("Tu carrito esta vacio.")
        return;
    }
    let eliminado = comprados.pop();
        alert(`Eliminaste: ${eliminado}`)
}   

//Funcion principal
function mientrasStock(productosEnStock, continuar, comprados) {

    while (productosEnStock.length > 0 && continuar){

    let opcion = mostrarMenu();

    switch (opcion){
        case 1:
            comprarProducto(productosEnStock, comprados);
        break;

        case 2:
            consultarStock(productosEnStock);
        break;

        case 3:
            verComprados(comprados);
        break;

        case 4:
            eliminarUltimoProducto(comprados);
        break;

        case 5:
            continuar = false;
            alert("Gracias por su compra.")
        break;

        default:
            alert("Opcion invalida.");
        break;
        }
    }
    if (productosEnStock.lenght === 0){
        alert("Se agotaron los productos.")
    }
}

iniciarPrograma();

