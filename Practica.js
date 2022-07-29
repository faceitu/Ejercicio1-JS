
const pizzas = [
    {
        id:1,
        nombre: "Napolitana",
        ingredientes: ["salsa de Tomate"," Morron", "Queso"],
        precio: 500
    },
    {
        id:2,
        nombre: "4 Quesos",
        ingredientes: ["Roquefort", "Provolone", "Queso Azul", "Queso sardo"],
        precio: 1100
    },
    {
        id:3,
        nombre: "Especial",
        ingredientes: ["Huevo", "lPanceta", "Morron", " Queso"],
        precio: 1499
    },
    {
        id:4,
        nombre: "Calabreza",
        ingredientes: ["Aceitunas", "Calabreza", "Queso"],
        precio: 1300
    },
    {
        id:5,
        nombre: "J y Q",
        ingredientes: ["Jamon", "Queso", "Aceitunas"],
        precio: 990
    },
    {
        id:6,
        nombre: "Cantimpalo",
        ingredientes: ["Cantimpalo", "Queso", "Aceitunas"],
        precio: 1400
    }
]
console.log("las pizzas cuyos ID son impares son:");
pizzas.forEach((item)=> {
if ((item.id % 2) != 0) {
    console.log(item.nombre)
}; 
}
);

let mayorQ = pizzas.find(item => item.precio > 600);
if (mayorQ) {
    console.log("Existen pizzas con un precio mayor a $600")
}

console.log("Nombres de las pizzas:");
pizzas.forEach((item) => console.log(item.nombre));
    console.log("Precios de las pizzas:");
pizzas.forEach((item) => console.log(item.precio));
    console.log("Precios y nombre de las pizzas:");
pizzas.forEach((item) => console.log("El precio de:", item.nombre, "tiene un valor de:", item.precio));










