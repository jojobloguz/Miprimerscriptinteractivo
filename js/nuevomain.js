//Clase nuevos productos (objetos)
class Producto {
    constructor (id,nombre,precio,categoria,stock){
        this.id = id;
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
    new Producto ("1","Remera",10000,"Indumentaria",true),
    new Producto ("2","Pantalon",15000,"Indumentaria",true),
    new Producto ("3","Zapatillas",40000,"Calzado",true),
    new Producto ("4","Campera",25000,"Indumentaria",true),
    new Producto ("5","Buzo",20000,"Indumentaria",true),
];

//Array para productos comprados
let comprados = [];

//Variables de html
let productosDisponibles = document.getElementById("productosDisponibles")

let carrito = document.getElementById("carrito")

let inputProducto = document.getElementById("nombre")

let inputPrecio = document.getElementById("precio")

let botonAgregar = document.getElementById("agregar")

//Funcion para mostrar el array productosEnStock
function renderizarProductos(){
    productosDisponibles.innerHTML = "";
    productosEnStock.forEach( producto =>{
        let contenedor = document.createElement("div")
        contenedor.className ="card"
        contenedor.innerHTML = `<span>ID: ${producto.id}</span>
                                <h3>Producto: ${producto.nombre}</h3>
                                <h4>Precio: ${producto.precio}</h4>
                                <h5>Categoria: ${producto.categoria}</h5>`
        productosDisponibles.appendChild(contenedor)
    })
}

renderizarProductos();

