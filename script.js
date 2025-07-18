const nombre = prompt("Ingrese su nombre");

alert(`Bienvenido ${nombre} a Bebidas Franco`);

carrito=[];

mostrarCarrito = () => {
    let texto = "le cobraran por caja, resumen de compra: \n\n";
    for (let i = 0; i < carrito.length; i++) {
        texto += `Producto: ${carrito[i].producto} | Cantidad: ${carrito[i].cantidad} \n`;
    }
    alert(texto);
}

function edad(){
    const edad = Number(prompt("Ingrese su edad:"));
    if(edad >= 18){
        alert("Eres mayor de edad, puedes comprar bebidas");
        console.log("el cliente puede pasar");
        return true
    }else{
        alert("No eres mayor de edad, no puedes comprar bebidas");
        console.log("el cliente no puede pasar");
        return false
    }
}

if (edad()) {
    seguir = true


while (seguir) {
    const menu= prompt("Elija una bebida: \n1. vodka \n2. Cerveza \n3. Vino \n4. whiskey \n5. Salir");

    

    switch (menu) {
        case "1":
            let cantidad = prompt("Ingrese la cantidad que desee comprar");
            carrito.push({producto: "vodka", cantidad: cantidad});
            break;
        case "2":
            let cantidad2 = prompt("Ingrese la cantidad que desee comprar");
            carrito.push({producto: "Cerveza", cantidad: cantidad2});
            break;
        case "3":
            let cantidad3 = prompt("Ingrese la cantidad que desee comprar");
            carrito.push({producto: "Vino", cantidad: cantidad3});
            break;
        case "4":
            let cantidad4 = prompt("Ingrese la cantidad que desee comprar");
            carrito.push({producto: "Whiskey", cantidad: cantidad4});
            break;
        case "5":
            alert("Gracias, vuelva pronto");
            seguir = false
            break;
        default:
            alert("La opcion que elegiste no era valida");
            break;
        }
    if (seguir) {
            seguir = confirm("¿Quiere seguir comprando?");
        }else{
            alert("Gracias, vuelva pronto");
        }

    }
    if (carrito.length == 0){
        alert("No hay nada en el carrito");
    }else if (carrito.length > 0){
        mostrarCarrito();
    }
    
}
