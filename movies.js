// Pelliculas
let peliculas = ["Turnode día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis" ,"Thor: amor y trueno"]

// Funcion para ordenar peicula
function destacarPelicula(pelicula, listaPeliculas) {
    let peliculaMayuscula = pelicula.toUpperCase();
    let indice = listaPeliculas.indexOf(pelicula);
    if (indice !== -1) {
        listaPeliculas.splice(indice, 1); // Elimina la película del array
        listaPeliculas.unshift(peliculaMayuscula); // Agrega la película en mayúsculas al inicio
    }else{
        console.log("la pelicula ingresada es incirrecta")
    }
    return listaPeliculas;
}
//console.log(destacarPelicula("Thor: amor y trueno", peliculas))

// Nuevas peliculas
let proximasPeliculas = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];
//console.log("Cadena de próximas películas:", proximasPeliculas);

// Combinar peliculas
function combinarPeliculas(lista1, lista2) {
    return lista1.concat(lista2);
}

let todasLasPeliculas = combinarPeliculas(peliculas, proximasPeliculas);
//console.log("Estructura combinada de todas las películas:", todasLasPeliculas);

