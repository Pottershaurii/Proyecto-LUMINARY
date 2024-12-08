let productoId = 1;
const listaproducto = [];

function registrarProducto() {
    const nombre = document.getElementById("nombre").value;
    const inscripcion = document.getElementById("inscripcion").value);
    const monto = parseInt(document.getElementById("monto").value);

    if (!nombre || isNaN(stock) || isNaN(precio)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
    }
    const nuevoProducto = {
        id: productoId++,
        nombre: nombre,
        stock: stock,
        precio: precio
    };

    listaproducto.push(nuevoProducto);
    document.getElementById("productoFormulario").reset();

    mostrarProductos();
}

function mostrarProductos() {
    const tablaproductoBody = document.getElementById("listaproducto");

    tablaproductoBody.innerHTML = "";

    listaproducto.forEach((producto) => {
        const row = document.creareElemento("tr");

        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.stock}</td>
            <td>${producto.precio.toFixed(2)}</td>
        `;

        tablaproductoBody.appendChild(row);
    });
}
