
/*
 *la primera vez devuelvo el array
 *pero si esta el stock guardado lo levanto y actualizo
 */
/*function obtenerProductos(){
    let stock = []
    if(localStorage.getItem("stock")){
        stock = JSON.parse(localStorage.getItem("stock"))
        productosa.forEach(producto => {
            cantidad = stock.find(stock => stock.id === producto.id).cantidad 
            producto.stock = cantidad
        })
    }
    return productosa

}*/

function actualizarStockProductos(productos){
    let stock = []
    if(localStorage.getItem("stock")){
        stock = JSON.parse(localStorage.getItem("stock"))
        productos.forEach(producto => {
            cantidad = stock.find(stockitem => stockitem.id === producto.id).cantidad
            producto.stock = cantidad
        })
    }
    return productos
}
/*
 * Obtiene el carrito del local storage
 */
function obtenerCarrito() {
    let carrito = []
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    return carrito
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function obtenerCategorias(productos){
    let categorias = []
    productos.forEach(producto => {
        if(!categorias.includes(producto.categoria)){
            categorias.push(producto.categoria)
        }
    })
    categorias.push("Vacio") //ningun producto tiene esta categoria
    categorias.push("Todos")
    return categorias
}
function renderizarSideBar(categorias,productos){
    let container = document.getElementById("sidebar-items")
   // let categorias = productos.map(producto => producto.categoria).filter((categoria, index, array) => array.indexOf(categoria) === index)
    container.innerHTML = "" // limpiar el contenedor antes de agregar los botones
    categorias.forEach(categoria => {
        let button = document.createElement("li")
        //button.className = "sidebar-item"
        button.innerText = categoria
        if( categoria==="Todos"){
            button.classList.add("sidebar-item-active")
        }
        button.addEventListener("click", (e) => filtrarCategoria(e, productos))
        container.appendChild(button)
    });
}

function inicializarNavBar(productos){
    let botonBuscar = document.getElementById("searchbtn")
    let searchinput = document.getElementById("searchbar")
    searchinput.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            mostrarListaProductos()
            renderizarProductos(buscarProducto(searchinput.value,productos),productos)
        }
    })
    searchinput.addEventListener("click", () => {
        searchinput.value = ""
    })
    botonBuscar.addEventListener("click", () => {
        mostrarListaProductos()
        renderizarProductos(buscarProducto(searchinput.value,productos),productos)
    })
    let botonVerProductosCarrito = document.getElementById("see-products-cart")
    botonVerProductosCarrito.addEventListener("click", verOcultarCarrito)
}

function verOcultarCarrito(e){
    let seccionProductos = document.getElementById("products-grid")
    let seccionCarrito = document.getElementById("cart-secction")
    if (e.target.innerText === "Ver carrito") {
        //puede haber una lista de productos o un producto mostrado
        e.target.innerText = "Ver productos"
        ocultarProductoActivo()
        seccionProductos.classList.add("hidden")
        seccionCarrito.classList.toggle("hidden")
    } else {
        //esttaba el carrito tonces muestro la lista de productos TODO: deberia buscar la forma de saber si habia un producto activo y volver a este
        e.target.innerText = "Ver carrito"
        seccionProductos.classList.remove("hidden")
        seccionCarrito.classList.add("hidden")
    }
}
function calcularUnidadesEnCarrito(){
    let carrito = obtenerCarrito()
    return carrito.reduce((total, producto) => total + producto.unidades, 0);

}

/*
 * renderiza los productos
 * Le tengo que pasar el array completo de productos para poder manejar el stock al final
 * el filtrados puede ser el completo tambien
 */
function renderizarProductos(productosFiltrados, productos){
    let container = document.getElementById("products-grid")
    container.innerHTML = ""
    productosFiltrados.forEach(producto => {
        let card = document.createElement("div")
        card.className = "product"
        card.innerHTML = `
            <img id=img${producto.id} src="img/${producto.id}.WEBP" alt="${producto.nombre}"></img>
            <p id=id${producto.id}>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <div class="add-to-cart">
                <input id=qty${producto.id} type="number" value="1" min="1" max="${producto.stock}">
                <button id=ac${producto.id}>Agregar al carrito</button>
            </div>
            
        `
        container.appendChild(card)
        //aca esta el problema, pueden venir los productos fitrados
        document.getElementById(`ac${producto.id}`).addEventListener("click", (e) => agregarAlCarrito(e, productos))
        document.getElementById(`id${producto.id}`).addEventListener("click", (e) => detalleDeProducto(e,productos))
        document.getElementById(`img${producto.id}`).addEventListener("click", (e) => detalleDeProducto(e,productos))

    });
}

function renderizarCarrito(carrito,productos){
    let header = document.getElementById("cart-header")
    header.innerHTML = ""
    let container = document.getElementById("cart")
    container.innerHTML = ""
    if(carrito.length === 0){
        header.innerHTML = `<h1>Carrito de compras</h1>
        `
        let card = document.createElement("div")
        card.className = "cart-card"
        card.innerHTML = `
            <h2>No hay productos en el carrito</h2>
        `
        container.appendChild(card) 
        return
    }

    let total = 0;

    carrito.forEach(producto => {
        let card = document.createElement("div")
        card.className = "cart-card"
        card.id = "cart-item-" + producto.id
        card.innerHTML = `
            <img src="img/${producto.id}.WEBP" alt="Producto ${producto.id}">
            <div class="info">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.unidades}</p>
                <p>Precio por unidad: $${producto.precio}</p>
                <p>Subtotal: $${producto.subtotal.toFixed(2)}</p>
            </div>
            <button class="delete-btn" id=del${producto.id}>Eliminar</button>
        `
        total += producto.subtotal
        container.appendChild(card)

        document.getElementById(`del${producto.id}`).addEventListener("click", (e) => eliminarProductoDelCarritoWrapper(e,productos))
    })
    header.innerHTML = `
        <h1>Carrito de compras (${calcularUnidadesEnCarrito()})</h1>
        <div>
            <p>Total $${total.toFixed(2)}</p>
            <button id="empty-cart" class="delete-btn">Vaciar Carrito</button>
            <button id="buy">Comprar</button>
        </div>
    `
    document.getElementById("empty-cart").addEventListener("click", () => vaciarCarritoWrapper(productos))
    document.getElementById("buy").addEventListener("click", ()=>comprar(productos))
}

function vaciarCarritoWrapper(productos){
    Swal.fire({
        title: "Seguro que quieres vaciar el carrito?",
        showDenyButton: true,
        confirmButtonText: "No Vaciar",
        denyButtonText: `Vaciar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Tu carrito sigue ahi", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Carrito Vaciado", "", "info");
          vaciarCarrito(productos)
        }
      });
}

/*
 * Carrito se hace un array vacio
 */
function vaciarCarrito(productos){
    let carrito = obtenerCarrito()
    carrito = []
    guardarCarrito(carrito)
    renderizarCarrito(carrito,productos)
}
/*
 * VERSION 1 ya no se usa
 * Busco el index en el array del carrito y hago un slice
 * de ese index de una unidad
 * renderizo el carrito
 * en la version 2 lo voy a mejorar solo renderizando el producto en carrito
 */
function eliminarProductoDelCarritoDeprecada(e,productos){
    let idProductoABuscar =parseInt(e.target.id.replace(/\D/g, ""));
    let carrito = obtenerCarrito()
    let indiceProducto = carrito.findIndex(producto => producto.id === idProductoABuscar);
    if (indiceProducto !== -1) {
        carrito[indiceProducto].
        carrito.splice(indiceProducto, 1);
        guardarCarrito(carrito)
    }
    renderizarCarrito(obtenerCarrito(),productos)
}

/*
 * VERSION 2 Mas eficiente solo renderizo el header
 * hago un splice del indice donde esta la ocurrencia del producto a eliminar
 * hago un remove del la row donde estaba ese item sin alterar el resto.
 * renderizo el header unicamente
 */
function eliminarProductoDelCarrito(e,productos){
    let idProductoABuscar =parseInt(e.target.id.replace(/\D/g, ""));
    let carrito = obtenerCarrito()
    let indiceProducto = carrito.findIndex(producto => producto.id === idProductoABuscar);
    let aRestar = 0
    if (indiceProducto !== -1) {
        aRestar = carrito[indiceProducto].subtotal
        carrito.splice(indiceProducto, 1);
        guardarCarrito(carrito)
        document.getElementById("cart-item-" + idProductoABuscar).remove()
    }
    // renderizo header unicamente
    renderizarHeaderDelCarrito(carrito,productos)
}
function renderizarHeaderDelCarrito(carrito,productos){
    let header = document.getElementById("cart-header")
    header.innerHTML = ""
    if(carrito.length === 0){
        let container = document.getElementById("cart")
        header.innerHTML = `<h1>Carrito de compras</h1>
        `
        let card = document.createElement("div")
        card.className = "cart-card"
        card.innerHTML = `
            <h2>No hay productos en el carrito</h2>
        `
        container.appendChild(card) 
    }else{
        let total = 0;
        carrito.forEach(productoEnCarro => {total += productoEnCarro.subtotal})
        
        header.innerHTML = `
        <h1>Carrito de compras (${calcularUnidadesEnCarrito()})</h1>
        <div>
            <p>Total $${total.toFixed(2)}</p>
            <button id="empty-cart" class="delete-btn">Vaciar Carrito</button>
            <button id="buy">Comprar</button>
        </div>
    `
        document.getElementById("empty-cart").addEventListener("click", () => vaciarCarritoWrapper(productos))
        document.getElementById("buy").addEventListener("click", ()=>comprar(productos))
    }   
}

/*
 * Wrapper del eliminar producto del carrito lo hace con sweet alert
*/
function eliminarProductoDelCarritoWrapper(e, productos){
    Swal.fire({
        title: 'Seguro que quieres eliminar este producto?',
        showDenyButton: true,
        confirmButtonText: 'No Eliminar',
        denyButtonText: `Eliminar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Tu producto sigue ahi", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Producto Eliminado", "", "info");
          eliminarProductoDelCarrito(e, productos)
        }
      }
    )
}

/*
 * Agrega un producto al carrito, recibe el evento e y le saca el id del producto
 * busco el producto en el array de productos
 * me fijo si ya existia en el carrito y le agrego la cantidad seleccionada
 * la funcion es llamada desde la lista de productos y desde el detalle
 * TODO: si es llamada desde el detalle ir a buscar la cantidad. Por defecto ahora uno.
 */
function agregarAlCarrito(e,productos){
    let idProducto =parseInt(e.target.id.replace(/\D/g, ""));
    let cantidad = 0
    //esto es porque puede vennir desde el grid de productos o desde el detalle.
    if(document.getElementById("products-grid").classList.contains("hidden")){
        cantidad = 1 //esto es para hacer un selector de cantidad en el detail
    }else{
        cantidad = parseInt(document.getElementById(`qty${idProducto}`).value.replace(/\D/g, ""))
    }
    let carrito = obtenerCarrito()
    let productoEncontrado = productos.find(producto => producto.id === idProducto)
    if (productoEncontrado) { 
        if(carrito.some(productoCarrito => productoCarrito.id === productoEncontrado.id)){
            let productoExistente = carrito.find(producto => producto.id === productoEncontrado.id)
            if(productoEncontrado.stock >= productoExistente.unidades + cantidad){
                productoExistente.unidades+=cantidad
                productoExistente.subtotal = productoExistente.unidades * productoExistente.precio
                mostrarTostada(`Agregada ${cantidad} unidades más de ${productoEncontrado.nombre} al carrito.\nTiene ${productoExistente.unidades} en el carrito`,true);
            }else{
                mostrarTostada(`No hay stock para agregar mas ${cantidad} unidad(es) del producto ${productoEncontrado.nombre}.`)
            }
        }else{
            if(productoEncontrado.stock >= cantidad){
                carrito.push({
                    id: productoEncontrado.id,
                    nombre: productoEncontrado.nombre,
                    precio: productoEncontrado.precio,
                    categoria: productoEncontrado.categoria,
                    unidades: cantidad,
                    subtotal: productoEncontrado.precio * cantidad
                })
                mostrarTostada(`Agregada ${cantidad} unidades de producto ${productoEncontrado.nombre} al carrito.`,true)
            }else{
                mostrarTostada(`No hay stock del producto ${productoEncontrado.nombre}.`,false)
            }
        }
        guardarCarrito(carrito)
    }else{
        mostrarTostada("Producto no encontrado.",false);
        return;
    }
    renderizarCarrito(carrito,productos)
}
/*
 * Oculta la seccion del carrito
 * muestra la seccion de productos
 * cambia el boton a ver carrito
 */
function ocultarCarrito(){
    let seccionCarrito = document.getElementById("cart-secction")
    seccionCarrito.classList.add("hidden")
    let botonVerProductosCarrito = document.getElementById("see-products-cart")
    botonVerProductosCarrito.innerText = "Ver carrito"

}

function removerActiveDeLaSidebar(){
    let active = document.getElementsByClassName("sidebar-item-active") 
    if(active.length > 0)
        active[0].classList.remove("sidebar-item-active")
}

function mostrarListaProductos(){
    ocultarCarrito()
    ocultarProductoActivo()
    let seccionProductos = document.getElementById("products-grid")
    seccionProductos.classList.remove("hidden")
}
/*
 * Obtengo la categoria desde donde se llamo
 * filtro los productos por categoria
 * si es todo, renderizo todo si no el filter
 */
function filtrarCategoria(e,productos){
    ocultarCarrito() //porque puede estar el carrito cuando seleccione las categorias
    ocultarProductoActivo() //porque puede haber un producto activo
    let seccionProductos = document.getElementById("products-grid")
    seccionProductos.classList.remove("hidden")

    let categoria = e.target.innerText 
    removerActiveDeLaSidebar()
    e.target.classList.add("sidebar-item-active")
    if(categoria === "Todos"){
        renderizarProductos(productos,productos)
        return
    }
    let productosFiltrados = productos.filter(producto => producto.categoria === categoria)
    renderizarProductos(productosFiltrados,productos)
}

// Función para buscar un producto por nombre (filter porque puede haber varios)
function buscarProducto(nombreProducto, productos) {
    removerActiveDeLaSidebar()
    let cadenaMinuscula = nombreProducto.toLowerCase();
    let productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(cadenaMinuscula));
    return productosEncontrados;
}
/*
 * actualiza stock de los productos
 * lo guarda en local storage
 * vacia el carrito
 */
function comprar(productos){
    let carrito = obtenerCarrito()
    let totalCompra = carrito.reduce((total, producto) => total + producto.subtotal, 0)
    carrito.forEach(productoEnCarrito => {
        let productoEncontrado = productos.find(productoBuscado => productoBuscado.id === productoEnCarrito.id)
        productoEncontrado.stock -= productoEnCarrito.unidades
    })
    guardarStock(productos)
    lanzarAlertaDulce("Gracias por su compra", "Su Pago fue procesado. El total fue: " + totalCompra.toFixed(2), "success", 10000)
    carrito = []
    guardarCarrito(carrito)
    renderizarCarrito(carrito,productos)
}
/*
 * Solo guarda id stock
*/
function guardarStock(productos){
    let productosStock = []
    productos.forEach(producto => {
        productosStock.push({
            id: producto.id,
            cantidad: producto.stock
        })
    }) 
    localStorage.setItem("stock", JSON.stringify(productosStock))
}


function detalleDeProducto(e,productos){
    let idProducto =parseInt(e.target.id.replace(/\D/g, ""));
    let productoEncontrado = productos.find(producto => producto.id === idProducto);
    if (productoEncontrado) {
        let contenedor = document.getElementById("product-detail")
        contenedor.innerHTML = ""
        contenedor.innerHTML = `
            <h2>Detalles del Producto</h2>
            <img src="img/${productoEncontrado.id}.WEBP" alt="Producto ${productoEncontrado.nombre}">
            <p><strong>Nombre:</strong> ${productoEncontrado.nombre}</p>
            <p><strong>Categoría:</strong> ${productoEncontrado.categoria}</p>
            <p><strong>Stock:</strong> ${productoEncontrado.stock}</p>
            <p><strong>Precio:</strong> ${productoEncontrado.precio}</p>
            <p><strong>Descripción:</strong> ${productoEncontrado.descripcion}</p>
            <p><strong>Marca:</strong> ${productoEncontrado.marca}</p>
            <div class="add-to-cart">
                <button id="acd${productoEncontrado.id}">Agregar al carrito</button>
            </div>
            <button id="close-modal">Cerrar</button>
            <div id="reviews-container">
                <h3>Reseñas de Usuarios</h3
            </div>
        `
        document.getElementById("products-grid").classList.add("hidden")
        contenedor.classList.remove("hidden")
        let botonCerrarContenedor = document.getElementById("close-modal")
        botonCerrarContenedor.addEventListener("click", () => {
            document.getElementById("products-grid").classList.remove("hidden")
            contenedor.classList.add("hidden")
        })
        //rehuso agregar al carrito misma funcion desde la lista de productos
        document.getElementById(`acd${productoEncontrado.id}`).addEventListener("click", (e) => agregarAlCarrito(e,productos))
        let contenedorReviews = document.getElementById("reviews-container")
        contenedorReviews.innerHTML = `<h3>Reseñas de Usuarios</h3><span class="loader"></span>` //le pongo un spinner para hasta que se resuelva la llamada json
        
        obtenerReviews(productoEncontrado.id)
    }
}

function renderizarReviews(reviews){
    let contenedor = document.getElementById("reviews-container")
    contenedor.innerHTML = "<h3>Reseñas de Usuarios</h3>"
    reviews.forEach(review => {
        contenedor.innerHTML += `
            <div class="review">
                <p><strong>Nombre:</strong> ${review.name}</p>
                <p><strong>Email:</strong> ${review.email}</p>
                <p><strong>Comentario:</strong> ${review.body}</p>
            </div>
        `
    })
}
/*
 * Las reviews son de json placegolder con el id de producto
 */
async function obtenerReviews(idProducto){
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idProducto}/comments`)
        const data = await response.json()
        renderizarReviews(data)
    } catch (error) {
        lanzarAlertaDulce("Algo salió mal, error: ", error, "error",3000)
    }
}

function ocultarProductoActivo(){
    let contenedor = document.getElementById("product-detail")
    contenedor.classList.add("hidden")
}



function lanzarAlertaDulce(title, text, icon, timer) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        timer: timer,
        timerProgressBar: true,
        showConfirmButton: true
    })
}

function mostrarTostada(mensaje,success){
    let background = success?"linear-gradient(to right, #00b09b, #96c93d)":"linear-gradient(to right, #ff0000, #ff4500)"
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: background,
        },
        onClick: function(){} // aca puede ir al mostrar carrito
      }).showToast();
}

async function pedirDatosAlBackend() {
    try {
        const resp = await fetch("./productos.json")
        const info = await resp.json()
        principal(info)
    } catch (error) {
        lanzarAlertaDulce("Algo salió mal, error: ", error, "error",3000)
    }
}

function principal(productos){
    productos = actualizarStockProductos(productos) //el stock que esta guardado en el local storage
    renderizarProductos(productos,productos)
    renderizarSideBar(obtenerCategorias(productos),productos)
    inicializarNavBar(productos)
    renderizarCarrito(obtenerCarrito(),productos)
}
function pasarProductosAJson(){
    console.log(JSON.stringify(productosa))
}

pedirDatosAlBackend()