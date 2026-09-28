let stock = 30;
continuar = true;

while (stock > 0 && continuar == true ) {
    let cantidad = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
    stock = stock - cantidad;
    alert("Quedan en stock:" + stock);

    let confirmar = prompt("¿Desea continuar con la compra? (si/no)");
    if (confirmar == "no") {
    continuar = false;
    console.log("Gracias por su compra.")
    }
}
