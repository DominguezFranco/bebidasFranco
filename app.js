const contenedor = document.getElementById("container");
const botonCarrito = document.getElementById("botonCarrito");   
const carritoOculto = document.getElementById("carritoOculto");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoLista = document.getElementById("carritoLista");


let carrito = [];

const mostrarProductos = () => {
    bebidas.forEach((bebida) => {
        const crearCard = document.createElement("section");
        crearCard.classList.add("card");
        crearCard.innerHTML = `
        <img class="img" src="${bebida.img}" alt="${bebida.nombre}">
        <h2>${bebida.nombre}</h2>
        <p>$${bebida.precio}</p>
        <button class="boton-agregar">Agregar al carrito</button>    
        `;

        const botonAgregar = crearCard.querySelector(".boton-agregar");
        botonAgregar.addEventListener("click", () => {
            carrito.push(bebida);
            mostrarCarrito();
        });

        contenedor.appendChild(crearCard);
    });
};

botonCarrito.addEventListener("click", () => {
    carritoOculto.classList.add ("visible"); 
    mostrarCarrito();
});



cerrarCarrito.addEventListener("click", () => {
    carritoOculto.classList.remove("visible");
});

function mostrarCarrito() {
    carritoLista.innerHTML = "";

    if (carrito.length === 0){
        carritoLista.innerHTML = "<p>No hay productos en el carrito</p>";
        return;
    }

    let total = 0;

    carrito.forEach((bebida) => {
        const crearCard = document.createElement("section");
        crearCard.classList.add("item-carrito");
        crearCard.innerHTML = `
        <img class="img" src="${bebida.img}" alt="${bebida.nombre}">
        <h2>${bebida.nombre}</h2>
        <p>$${bebida.precio}</p>
        
        `;

        carritoLista.appendChild(crearCard);
        total += bebida.precio;
    });

    const totalElemento = document.createElement("p");
    totalElemento.textContent = `Total: $${total}`;
    carritoLista.appendChild(totalElemento);


    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("boton-vaciar");
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.addEventListener("click", () => {
        carrito = [];
        mostrarCarrito();
    });
    carritoLista.appendChild(botonVaciar);
}


mostrarProductos();














