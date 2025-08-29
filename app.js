const contenedor = document.getElementById("container");
const botonCarrito = document.getElementById("botonCarrito");   
const carritoOculto = document.getElementById("carritoOculto");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const carritoLista = document.getElementById("carritoLista");


let carrito = [];
let bebidas = [];

fetch("bebidas.json")
.then((response) => response.json())
.then((data) => {
    bebidas = data;
    mostrarProductos();
})
.catch((error) => console.error("Error al obtener los datos:", error));

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

        contenedor.appendChild(crearCard);

        const botonAgregar = crearCard.querySelector(".boton-agregar");
        botonAgregar.addEventListener("click", () => {
            Toastify({
                text: "✅ Se agregó al carrito",
                duration: 1300, 
                gravity: "top", 
                position: "right",
                backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", 
                stopOnFocus: true
            }).showToast();
            const item = carrito.find((prod) => prod.id === bebida.id); 
           if (item) {
            item.cantidad++;
           } else {
            bebida.cantidad = 1;
            carrito.push(bebida);
            
           }
           mostrarCarrito();
           guardarCarrito();
        });

        
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
        <p class="precio">$${bebida.precio}</p>
        <span class="cantidad"> x${bebida.cantidad}</span>
        `;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("boton-eliminar");
        botonEliminar.textContent = "X";
        botonEliminar.addEventListener("click", () => {
            const index = carrito.indexOf(bebida);
            if (index !== -1) {
                carrito.splice(index, 1);
                mostrarCarrito();
                guardarCarrito();
            }
        });
        crearCard.appendChild(botonEliminar);

        carritoLista.appendChild(crearCard);
        total += bebida.precio * bebida.cantidad;
    });

    const totalElemento = document.createElement("p");
    totalElemento.textContent = `Total: $${total}`;
    carritoLista.appendChild(totalElemento);


    const botonVaciar = document.createElement("button");
    botonVaciar.classList.add("boton-vaciar");
    botonVaciar.textContent = "Vaciar carrito";
    botonVaciar.addEventListener("click", () => {
       
        Swal.fire({
            title: "¿Estás seguro de vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, vaciar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                carrito = [];
                mostrarCarrito();
                guardarCarrito();
                Swal.fire({
                    title: "Se ha vaciado el carrito",
                    icon: "success"
                });
            }
        });
    });
    carritoLista.appendChild(botonVaciar);

    const botonTerminarCompra = document.createElement("button");
    botonTerminarCompra.classList.add("boton-terminar-compra");
    botonTerminarCompra.textContent = "Terminar compra";
    botonTerminarCompra.addEventListener("click", () => {
        carrito = [];
        mostrarCarrito();
        guardarCarrito();
        swal.fire({
            title: "Compra realizada con éxito",
            text: `El total de tu compra es: $${total}`,
            icon: "success"
        })
    });
    carritoLista.appendChild(botonTerminarCompra);
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
});


mostrarProductos();














