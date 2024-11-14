// Electrodomesticos
let productos= ["lavarropa","television","ventilador","heladera","microondas","pava electrica"]

// Desde el 0 al 5 para acceder a los elementos guardadods en el array
console.log(productos[5]); 

// Eliminacion de primer elemento de la array y agregar al final
productos.push(productos.shift())

// Agregar 2 nuevos elementos
productos.push("cocina electrica","tostadora")

// Cantidad de elementos
console.log("Hay",productos.length,"elementos")

// Existe el objeto?
function encontrarProducto(productos,arrayproductos) {
    if (arrayproductos.includes(productos)) {
        console.log("Producto encontrado");
    } else {
        console.log("El producto buscado no existe");
    }
}
//encontrarProducto("lavarropa", productos); 
encontrarProducto("television", productos); 

// Separar los elementos con espacios
let cadenaProductos = productos.join(" ");
console.log("Cadena de productos:", cadenaProductos);

//cantidad de elementos que posee la cadena
console.log("Cantidad de caracteres en la cadena de productos:", cadenaProductos.length);

// Cambiar nombre de un elemneto
let cadenaNueva = cadenaProductos.replace("microondas", "horno eléctrico");
console.log("Cadena de productos después de la modificación:", cadenaNueva);

// De cadena de string a arrat
let deCadenaAArray = cadenaNueva.split();
console.log("Nuevo array separado por comas:", deCadenaAArray);




















/*let producto = "television";
let existe = 0
for (let i = 0; i < productos.length; i++) {
    if (producto == productos[i]) {
    existe += 1
    }
}
if (existe >= 1) {
    console.log("Producto encontrado")
}else{
    console.log("El producto buscado no existe")
}*/