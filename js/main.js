//Funcion de inicio
function iniciarPrograma() {
    const productosEnStock = [
        new Producto ("Remera",10000,"indumentaria",true),
        new Producto ("Pantalon",15000,"indumentaria",true),
        new Producto ("Zapatillas",40000,"calzado",true),
        new Producto ("Campera",25000,"indumentaria",true),
        new Producto ("Buzo",20000,"indumentaria",true),
    ];
    let continuar = true;
    let comprados = [];

    continuarCompra(productosEnStock, continuar, comprados);
}

class Producto {
    constructor (nombre,precio,categoria,stock){
        this.nombre = nombre,
        this.precio = precio,
        this.categoria = categoria,
        this.stock = stock
    }

    descontar(descuento){
        if(descuento > 0 && descuento < 100){
        let precioFinal = this.precio * (1 - descuento/100);
        this.precio = precioFinal
        }
    }
}

//Menu de opciones
const mostrarMenu = () => {
    return parseInt(prompt(
        "Menu\n" +
        "1. Comprar productos\n" +
        "2. Consultar stock\n" +
        "3. Ver productos comprados\n" +
        "4. Eliminar ultimo producto comprado\n" +
        "5. Aplicar descuento\n" +
        "6. Salir\n\n" +
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
    for(const productos of productosEnStock){
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
    for(const productos of comprados){
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

//Aplicar descuento
function aplicarDescuento(productosEnStock){
    let buscado = prompt("¿A que producto quiere aplicar su descuento?");
    let productoBuscado = null;
    for(const producto of productosEnStock){
        if(buscado === producto.nombre){
            productoBuscado = producto;
        }
    }
    if(productoBuscado !== null){
        productoBuscado.descontar(20)
        alert(productoBuscado.precio)
    }   else{
        alert("El producto ingresado no existe o no queda stock.")
    }
}

//Funcion principal
function continuarCompra(productosEnStock, continuar, comprados) {

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
            aplicarDescuento(productosEnStock);

        case 6:
            continuar = false;
            alert("Gracias por su compra.")
        break;

        default:
            alert("Opcion invalida.");
        break;
        }
    }
    if (productosEnStock.length === 0){
        alert("Se agotaron los productos.")
    }
}

iniciarPrograma();

