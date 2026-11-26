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
const comprados = [];

//Variables de html
let productosDisponibles = document.getElementById("productosDisponibles")

let carrito = document.getElementById("carrito")

let inputId = document.getElementById("id")

let inputProducto = document.getElementById("nombre")

let inputPrecio = document.getElementById("precio")

let inputCategoria = document.getElementById("categoria")

let botonAgregar = document.getElementById("agregar")

//Funcion para mostrar el array productosEnStock
function mostrarProductos(){
    productosDisponibles.innerHTML = "";
    productosEnStock.forEach( producto =>{
        let contenedor = document.createElement("div")
        contenedor.className ="card"
        contenedor.innerHTML = `<span>ID: ${producto.id}</span>
                                <h3>Producto: ${producto.nombre}</h3>
                                <h4>Precio: $ ${producto.precio}</h4>
                                <h5>Categoria: ${producto.categoria}</h5>
                                <button>Comprar</button>`
        let botonComprar = contenedor.querySelector("button")
        botonComprar.addEventListener("click", ()=> {
            comprarProducto(producto)
        })
                                
        productosDisponibles.appendChild(contenedor)
    })
}

mostrarProductos();

//Funcion para comprar productos vinculada al boton de mostrarProductos
function comprarProducto(producto){
    let posicion = productosEnStock.indexOf(producto);
    let productoComprado = productosEnStock.splice(posicion,1)[0]
    comprados.push(productoComprado)
    producto.stock = false;

    mostrarProductos();
    mostrarCarrito()
}

//Funcion para mostrar los productos comprados
function mostrarCarrito(){
    carrito.innerHTML = "";
    comprados.forEach( producto =>{
        let contenedor = document.createElement("div")
        contenedor.className ="card"
        contenedor.innerHTML = `<span>ID: ${producto.id}</span>
                                <h3>Producto: ${producto.nombre}</h3>
                                <h4>Precio: $ ${producto.precio}</h4>
                                <h5>Categoria: ${producto.categoria}</h5>
                                <button>Eliminar</button>`
        let botonEliminar = contenedor.querySelector("button")
        botonEliminar.addEventListener("click", ()=> {
        eliminarProducto(producto)
        })

        carrito.appendChild(contenedor)
    })
}

//Funcion para eliminar productos del carrito
function eliminarProducto(producto){
    let posicion = comprados.indexOf(producto);
    let productoComprado = comprados.splice(posicion,1)[0]
    productosEnStock.push(productoComprado);
    producto.stock = true;

    mostrarProductos();
    mostrarCarrito()

}

//Funcion para agregar productos a productosEnStock
function agregarProducto(){
    let id = parseInt(inputId.value);
    let producto = inputProducto.value;
    let precio = parseInt(inputPrecio.value);
    let categoria = inputCategoria.value;
    let nuevoProducto = new Producto(id,producto,precio,categoria,true);
    productosEnStock.push(nuevoProducto);
    mostrarProductos();
    inputId.value = "";
    inputProducto.value = "";
    inputPrecio.value = "";
    inputCategoria.value = ""
}

botonAgregar.addEventListener("click", agregarProducto);



