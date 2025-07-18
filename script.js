let nombre = prompt("Ingrese su nombre");


if (nombre === null) {
    alert("okay, prefieres no decir tu nombre");
} else {
    
    while (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre");
        nombre = prompt("Ingrese su nombre");

        
        if (nombre === null) {
            alert("okay, prefieres no decir tu nombre");
            break;
        }
    }

    if (nombre !== null && nombre.trim() !== "") {
        alert(`Bienvenido ${nombre} a Bebidas Franco`);

        
    }
}

carrito=[];

mostrarCarrito = () => {
    let texto = "le cobraran por caja, resumen de compra: \n\n";
    for (let i = 0; i < carrito.length; i++) {
        texto += `Producto: ${carrito[i].producto} | Cantidad: ${carrito[i].cantidad} \n`;
    }
    alert(texto);
}

function edad() {
    let edadIngresada = prompt("Ingrese su edad:");

    while (edadIngresada === null || edadIngresada.trim() === "") {
        alert("Por favor, ingrese su edad");
        edadIngresada = prompt("Ingrese su edad:");
    }

    const edadNum = Number(edadIngresada);

    if (isNaN(edadNum)) {
        alert("Ingrese un número válido para la edad");
        return false;
    }

    if (edadNum >= 18) {
        alert("Eres mayor de edad, puedes comprar bebidas");
        console.log("el cliente puede pasar");
        return true;
    } else {
        alert("No eres mayor de edad, no puedes comprar bebidas");
        console.log("el cliente no puede pasar");
        return false;
    }
}

if (edad()) {
    seguir = true


while (seguir) {
    const menu= prompt("Elija una bebida: \n1. vodka \n2. Cerveza \n3. Vino \n4. whiskey \n5. Salir");

    if (menu === null || menu.trim() === "") {
    alert("Debe ingresar una opción válida");
    continue;
}

function pedirCantidad() {
    let cant = prompt("Ingrese la cantidad que desee comprar");

    while (cant === null || cant.trim() === "" || isNaN(Number(cant)) || Number(cant) <= 0) {
        alert("Por favor, ingrese una cantidad válida");
        cant = prompt("Ingrese la cantidad que desee comprar");
    }

    return cant;
}
    

    switch (menu) {
        case "1":
            let cantidad = pedirCantidad();
            carrito.push({producto: "vodka", cantidad: cantidad});
            break;
        case "2":
            let cantidad2 = pedirCantidad();
            carrito.push({producto: "Cerveza", cantidad: cantidad2});
            break;
        case "3":
            let cantidad3 = pedirCantidad();
            carrito.push({producto: "Vino", cantidad: cantidad3});
            break;
        case "4":
            let cantidad4 = pedirCantidad();
            carrito.push({producto: "Whiskey", cantidad: cantidad4});
            break;
        case "5":
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
