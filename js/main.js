//Clase nuevos productos (objetos)
class Producto {
    constructor (nombre,precio,categoria,stock){
        this.nombre = nombre,
        this.precio = precio,
        this.categoria = categoria,
        this.stock = stock,
        this.descuentoAplicado = false
    }

    descontar(descuento){
        if(descuento > 0 && descuento < 100 && this.descuentoAplicado === false){
        let precioFinal = this.precio * (1 - descuento/100);
        this.precio = precioFinal;
        this.descuentoAplicado = true;
        }
    }
}

//Array de productos
const productosEnStock = [
    new Producto ("Remera",10000,"indumentaria",true),
    new Producto ("Pantalon",15000,"indumentaria",true),
    new Producto ("Zapatillas",40000,"calzado",true),
    new Producto ("Campera",25000,"indumentaria",true),
    new Producto ("Buzo",20000,"indumentaria",true),
];

//Variables globales para continuar compra y para el carrito
let continuar = true;
let comprados = [];

//Comprar productos
function comprarProducto(productosEnStock, comprados) {
    if(productosEnStock.length === 0) {
    alert("No quedan productos en stock.")
    return;
    }

    let buscado = prompt("¿Que producto desea comprar?")
    let productoComprado = null;
    for(const producto of productosEnStock ){
        if(buscado === producto.nombre){
            productoComprado = producto;
            const posicion = productosEnStock.indexOf(producto)
            productoComprado = productosEnStock.splice(posicion,1)[0]
        }
    }

    if(productoComprado !== null){
        comprados.push(productoComprado);
        alert(`Compraste: ${productoComprado.nombre}`)
    }   else {
        alert('El producto no se encuentra en stock o esta agotado.')
        }

    if(productosEnStock.length === 0) {
        alert("No quedan productos en stock.")
    }
    
}

//Consultar stock
function consultarStock(productosEnStock) {
    if (productosEnStock.length === 0){
        alert("No quedan productos en stock.");
        return;
    }
    let mensaje = "Productos Disponibles:\n";
    for(const producto of productosEnStock){
        mensaje += `-${producto.nombre} - ${producto.precio} - ${producto.categoria}\n`
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
    for(const producto of comprados){
        mensaje += `-${producto.nombre} - ${producto.precio} - ${producto.categoria}\n`
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
        alert(`Eliminaste: ${eliminado.nombre}`)
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
    if(productoBuscado !== null && productoBuscado.descuentoAplicado === false){
        productoBuscado.descontar(20)
        alert("Descuento aplicado. Nuevo precio: $" + productoBuscado.precio)
    }   else{
        alert("El producto ingresado no existe o ya se aplico un descuento.")
    }
}

//Funcion principal
function continuarCompra() {

    while (continuar){

    let opcion = parseInt(prompt(
        "Menu\n" +
        "1. Comprar productos\n" +
        "2. Consultar stock\n" +
        "3. Ver productos comprados\n" +
        "4. Eliminar ultimo producto comprado\n" +
        "5. Aplicar descuento\n" +
        "6. Salir\n\n" +
        "Ingrese una opcion:"
    ));

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
        break;
        
        case 6:
            continuar = false;
            alert("Gracias por su compra.")
        break;

        default:
            alert("Opcion invalida.");
        break;
        }
    }
}

continuarCompra();

