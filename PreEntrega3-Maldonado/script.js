let categorias = []

let productosa = [
    { 
        id: 1, 
        nombre: "Camisa de algodón", 
        categoria: "Ropa", 
        stock: 50, 
        precio: 20.99, 
        descripcion: "Camisa de algodón suave y cómoda en varios colores.", 
        marca: "FashionCo" 
    },
    { 
        id: 2, 
        nombre: "Pantalon vaqueros", 
        categoria: "Ropa", 
        stock: 30, 
        precio: 39.99, 
        descripcion: "Pantalones vaqueros de alta calidad.", 
        marca: "FashionCo" 
    },
    { 
        id: 3, 
        nombre: "Zapatillas deportivas", 
        categoria: "Calzado", 
        stock: 1, 
        precio: 49.99, 
        descripcion: "Zapatillas deportivas para correr y hacer ejercicio.", 
        marca: "Nike" 
    },
    { 
        id: 4, 
        nombre: "Bolso de cuero", 
        categoria: "Accesorios", 
        stock: 2, 
        precio: 79.99, 
        descripcion: "Bolso de cuero genuino con múltiples compartimentos.", 
        marca: "Banana Republic" 
    },
    { 
        id: 5, 
        nombre: "Gafas de sol", 
        categoria: "Accesorios", 
        stock: 0, 
        precio: 29.99, 
        descripcion: "Gafas de sol polarizadas con protección UV400.", 
        marca: "RayBan" 
    },
    { 
        id: 6, 
        nombre: "Bufanda de lana", 
        categoria: "Ropa", 
        stock: 20, 
        precio: 15.50, 
        descripcion: "Bufanda suave y abrigada de lana merino.", 
        marca: "FashionCo" 
    },
    { 
        id: 7, 
        nombre: "Smartphone Android", 
        categoria: "Electrónica", 
        stock: 15, 
        precio: 299.99, 
        descripcion: "Smartphone con sistema operativo Android y cámara de alta resolución.", 
        marca: "Samsung" 
    },
    { 
        id: 8, 
        nombre: "Ultrabook", 
        categoria: "Electrónica", 
        stock: 10, 
        precio: 899.99, 
        descripcion: "Computadora ligero y potente con pantalla táctil y procesador Intel Core.", 
        marca: "Samsung" 
    },
    { 
        id: 9, 
        nombre: "Teclado inalámbrico", 
        categoria: "Electrónica", 
        stock: 20, 
        precio: 49.99, 
        descripcion: "Teclado inalámbrico ergonómico con conexión Bluetooth.", 
        marca: "Logitech" 
    },
    { 
        id: 10, 
        nombre: "Mouse óptico", 
        categoria: "Electrónica", 
        stock: 30, 
        precio: 19.99, 
        descripcion: "Mouse óptico de precisión con sensor láser y diseño ergonómico.", 
        marca: "Logitech" 
    },
    { 
        id: 11, 
        nombre: "Lámpara de escritorio LED", 
        categoria: "Hogar", 
        stock: 25, 
        precio: 34.99, 
        descripcion: "Lámpara de escritorio LED con regulador de intensidad y brazo flexible.", 
        marca: "IlumiLamp" 
    },
    { 
        id: 12, 
        nombre: "Cafetera", 
        categoria: "Electrodomésticos", 
        stock: 15, 
        precio: 69.99, 
        descripcion: "Cafetera de goteo programable con capacidad para 12 tazas.", 
        marca: "Oster" 
    },
    { 
        id: 13, 
        nombre: "Tostadora de pan", 
        categoria: "Electrodomésticos", 
        stock: 20, 
        precio: 24.99, 
        descripcion: "Tostadora de pan con ranuras extraanchas y función de descongelado.", 
        marca: "Tostamatic" 
    },
    { 
        id: 14, 
        nombre: "Sartén antiadherente", 
        categoria: "Cocina", 
        stock: 30, 
        precio: 39.99, 
        descripcion: "Sartén antiadherente de 10 pulgadas con mango ergonómico.", 
        marca: "Sar-Ten" 
    },
    { 
        id: 15, 
        nombre: "Set de cuchillos de cocina", 
        categoria: "Cocina", 
        stock: 20, 
        precio: 49.99, 
        descripcion: "Set de cuchillos de cocina de acero inoxidable con soporte de madera.", 
        marca: "Cutucuchillo" 
    },
    { 
        id: 16, 
        nombre: "Juego de té porcelana", 
        categoria: "Hogar", 
        stock: 10, 
        precio: 59.99, 
        descripcion: "Juego de té de porcelana con diseño elegante y resistente.", 
        marca: "Porcelana fina de China" 
    },
    { 
        id: 17, 
        nombre: "Mochila escolar", 
        categoria: "Accesorios", 
        stock: 40, 
        precio: 29.99, 
        descripcion: "Mochila escolar resistente con compartimentos acolchados para portátil y tablet.", 
        marca: "Jansport" 
    },
    { 
        id: 18, 
        nombre: "Libreta de cuero", 
        categoria: "Papelería", 
        stock: 50, 
        precio: 14.99, 
        descripcion: "Libreta de cuero genuino con hojas de papel reciclado.", 
        marca: "Rivadavia" 
    },
    { 
        id: 19, 
        nombre: "Botella de agua deportiva", 
        categoria: "Deportes", 
        stock: 30, 
        precio: 9.99, 
        descripcion: "Botella de agua deportiva con tapa abatible y boquilla antiderrames.", 
        marca: "Sport" 
    },
    { 
        id: 20, 
        nombre: "Pelota de fútbol", 
        categoria: "Deportes", 
        stock: 25, 
        precio: 19.99, 
        descripcion: "Pelota de fútbol de tamaño oficial con diseño resistente y duradero.", 
        marca: "Adidas" 
    },
    { 
        id: 21, 
        nombre: "Set de pesas ajustables", 
        categoria: "Fitness", 
        stock: 15, 
        precio: 79.99, 
        descripcion: "Set de pesas ajustables con barras y discos de diferentes pesos.", 
        marca: "Sport" 
    },
    { 
        id: 22, 
        nombre: "Esterilla de yoga", 
        categoria: "Fitness", 
        stock: 20, 
        precio: 24.99, 
        descripcion: "Esterilla de yoga antideslizante con diseño de doble capa.", 
        marca: "Yogatness" 
    },
    { 
        id: 23, 
        nombre: "Cuerda de saltar", 
        categoria: "Fitness", 
        stock: 30, 
        precio: 12.99, 
        descripcion: "Cuerda de saltar ajustable con rodamientos de bolas para un giro suave.", 
        marca: "Dytoys" 
    },
    { 
        id: 24, 
        nombre: "Guitarra acústica", 
        categoria: "Instrumentos musicales", 
        stock: 10, 
        precio: 199.99, 
        descripcion: "Guitarra acústica de tamaño completo con cuerpo de abeto y caoba.", 
        marca: "MusicaLoca" 
    },
    { 
        id: 25, 
        nombre: "Teclado electrónico", 
        categoria: "Instrumentos musicales", 
        stock: 15, 
        precio: 149.99, 
        descripcion: "Teclado electrónico con 61 teclas sensibles al tacto y múltiples funciones.", 
        marca: "Yamaha" 
    },
    { 
        id: 26, 
        nombre: "Micrófono de condensador", 
        categoria: "Electrónica", 
        stock: 10, 
        precio: 89.99, 
        descripcion: "Micrófono de condensador profesional para grabaciones de alta calidad.", 
        marca: "Aiwa" 
    },
    { 
        id: 27, 
        nombre: "Parlante Bluetooth", 
        categoria: "Electrónica", 
        stock: 20, 
        precio: 59.99, 
        descripcion: "Altavoces Bluetooth portátiles con sonido estéreo y batería de larga duración.", 
        marca: "Aiwa" 
    },
    { 
        id: 28, 
        nombre: "Auriculares inalámbricos", 
        categoria: "Electrónica", 
        stock: 30, 
        precio: 49.99, 
        descripcion: "Auriculares inalámbricos con cancelación de ruido y control táctil.", 
        marca: "Samnsung" 
    },
    { 
        id: 29, 
        nombre: "Camara digital compacta", 
        categoria: "Electrónica", 
        stock: 15, 
        precio: 179.99, 
        descripcion: "Cámara digital compacta con sensor de imagen de alta resolución.", 
        marca: "Kodak" 
    },
    { 
        id: 30, 
        nombre: "Reloj inteligente", 
        categoria: "Electrónica", 
        stock: 20, 
        precio: 99.99, 
        descripcion: "Reloj inteligente con funciones avanzadas de seguimiento de actividad y notificaciones.", 
        marca: "Samsung" 
    },
    { 
        id: 31, 
        nombre: "Reloj Rolex", 
        categoria: "Accesorios", 
        stock: 2, 
        precio: 500.99, 
        descripcion: "Reloj Rolex de lujo, la envidia de tus amigos.", 
        marca: "Rolex" 
    },
    { 
        id: 32, 
        nombre: "Mochila antirobo", 
        categoria: "Accesorios", 
        stock: 20, 
        precio: 39.99, 
        descripcion: "Mochila para computadora resistente con compartimentos ocultos.", 
        marca: "ChorroStore" 
    },
    { 
        id: 33, 
        nombre: "Camara profesional", 
        categoria: "Electrónica", 
        stock: 5, 
        precio: 399.99, 
        descripcion: "Camara digital con lente profesional.", 
        marca: "Nikon" 
    },
    { 
        id: 34, 
        nombre: "Computadora Gamer", 
        categoria: "Electrónica", 
        stock: 5, 
        precio: 999.99, 
        descripcion: "Computadora con luces y super placa de video.", 
        marca: "Lenovo" 
    },
    {
        id: 35, 
        nombre: "Remera Colorida", 
        categoria: "Ropa", 
        stock: 10, 
        precio: 9.99, 
        descripcion: "Remera multicolor de mangas cortas.", 
        marca: "FashionCo" 
    },
    {
        id: 36, 
        nombre: "Remera Negra", 
        categoria: "Ropa", 
        stock: 2, 
        precio: 8.99, 
        descripcion: "Remera negra de mangas cortas.", 
        marca: "FashionCo" 
    }
];

function obtenerProductos(){
    let stock = []
    if(localStorage.getItem("stock")){
        stock = JSON.parse(localStorage.getItem("stock"))
        productosa.forEach(producto => {
            cantidad = stock.find(stock => stock.id === producto.id).cantidad 
            producto.stock = cantidad
        })
    }
    return productosa
}

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

function principal(){
    renderizarProductos(obtenerProductos())
    renderizarSideBar(obtenerCategorias())
    inicializarNavBar()
    renderizarCarrito(obtenerCarrito())
}

function obtenerCategorias(){
    let categorias = []
    let productos = obtenerProductos()
    productos.forEach(producto => {
        if(!categorias.includes(producto.categoria)){
            categorias.push(producto.categoria)
        }
    })
    categorias.push("Vacio") //ningun producto tiene esta categoria
    categorias.push("Todos")
    return categorias
}
function renderizarSideBar(categorias){
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
        button.addEventListener("click", filtrarCategoria)
        container.appendChild(button)
    });
}

function inicializarNavBar(){
    let botonBuscar = document.getElementById("searchbtn")
    let searchinput = document.getElementById("searchbar")
    searchinput.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            ocultarCarrito()
            renderizarProductos(buscarProducto(searchinput.value))
        }
    })
    searchinput.addEventListener("click", () => {
        searchinput.value = ""
    })
    botonBuscar.addEventListener("click", () => {
        ocultarCarrito()
        renderizarProductos(buscarProducto(searchinput.value))
    })
    let botonVerProductosCarrito = document.getElementById("see-products-cart")
    botonVerProductosCarrito.addEventListener("click", verOcultarCarrito)
}

function verOcultarCarrito(e){
    let seccionProductos = document.getElementById("products-grid")
    let seccionCarrito = document.getElementById("cart-secction")
    seccionProductos.classList.toggle("hidden")
    seccionCarrito.classList.toggle("hidden")
    
    if (e.target.innerText === "Ver carrito") {
        e.target.innerText = "Ver productos"
    } else {
        e.target.innerText = "Ver carrito"
    }
}

function renderizarProductos(productos){
    let container = document.getElementById("products-grid")
    container.innerHTML = ""
    productos.forEach(producto => {
        let card = document.createElement("div")
        card.className = "product"
        card.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="${producto.nombre}"
            <p>${producto.nombre}</p>
            <p>Precio: $${producto.precio}</p>
            <div class="add-to-cart">
                <input id=qty${producto.id} type="number" value="1" min="1" max="${producto.stock}">
                <button id=ac${producto.id}>Agregar al carrito</button>
            </div>
            
        `
        container.appendChild(card)
        document.getElementById(`ac${producto.id}`).addEventListener("click", agregarAlCarrito)
    });
}

function renderizarCarrito(carrito){
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
        card.innerHTML = `
            <img src="https://via.placeholder.com/150" alt="Producto ${producto.id}">
            <div class="info">
                <h2>${producto.nombre}</h2>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.unidades}</p>
                <p>Precio por unidad: $${producto.precio}</p>
                <p>Subtotal: $${producto.subtotal}</p>
            </div>
            <button class="delete-btn" id=del${producto.id}>Eliminar</button>
        `
        total += producto.subtotal
        container.appendChild(card)

        document.getElementById(`del${producto.id}`).addEventListener("click", eliminarProductoDelCarrito)
    })
    header.innerHTML = `
        <h1>Carrito de compras</h1>
        <div>
            <p>Total $${total.toFixed(2)}</p>
            <button id="empty-cart" class="delete-btn">Vaciar Carrito</button>
            <button id="buy">Comprar</button>
        </div>
    `
    document.getElementById("empty-cart").addEventListener("click", vaciarCarrito)
    document.getElementById("buy").addEventListener("click", comprar)
}
function vaciarCarrito(){
    let carrito = obtenerCarrito()
    carrito = []
    guardarCarrito(carrito)
    renderizarCarrito(carrito)
}
function eliminarProductoDelCarrito(e){
    //console.log("eliminar" + e.target.id + "del carrito")
    let idProductoABuscar =parseInt(e.target.id.replace(/\D/g, ""));
    let carrito = obtenerCarrito()
    let indiceProducto = carrito.findIndex(producto => producto.id === idProductoABuscar);
    if (indiceProducto !== -1) {
        carrito.splice(indiceProducto, 1);
        guardarCarrito(carrito)
    }
    renderizarCarrito(obtenerCarrito())
}

function agregarAlCarrito(e){
    let idProducto =parseInt(e.target.id.replace(/\D/g, ""));
    let cantidad = parseInt(document.getElementById(`qty${idProducto}`).value.replace(/\D/g, ""))
    productos = obtenerProductos()
    let carrito = obtenerCarrito()
    let productoEncontrado = productos.find(producto => producto.id === idProducto);    
    if (productoEncontrado) { 
        if(carrito.some(productoCarrito => productoCarrito.id === productoEncontrado.id)){
            let productoExistente = carrito.find(producto => producto.id === productoEncontrado.id)
            if(productoEncontrado.stock >= productoExistente.unidades + cantidad){
                productoExistente.unidades+=cantidad
                productoExistente.subtotal = productoExistente.unidades * productoExistente.precio
                alert(`Agregada ${cantidad} unidades más de ${productoEncontrado.nombre} al carrito.\nTiene ${productoExistente.unidades} en el carrito`);
            }else{
                alert(`No hay stock para agregar mas ${cantidad} unidades del producto ${productoEncontrado.nombre}.`);
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
                alert(`Agregada ${cantidad} unidades de producto ${productoEncontrado.nombre} al carrito.`);
            }else{
                alert(`No hay stock del producto ${productoEncontrado.nombre}.`);
            }
        }
        guardarCarrito(carrito)
    }else{
        alert("Producto no encontrado.");
        return;
    }
    renderizarCarrito(carrito)
}
function ocultarCarrito(){
    let seccionProductos = document.getElementById("products-grid")
    if(seccionProductos.classList.contains("hidden")){
        seccionProductos.classList.toggle("hidden")
        let seccionCarrito = document.getElementById("cart-secction")
        seccionCarrito.classList.toggle("hidden")
        let botonVerProductosCarrito = document.getElementById("see-products-cart")
        botonVerProductosCarrito.innerText = "Ver carrito"
    }
}

function removerActiveDeLaSidebar(){
    let active = document.getElementsByClassName("sidebar-item-active") 
    if(active.length > 0)
        active[0].classList.remove("sidebar-item-active")
}

function filtrarCategoria(e){
    ocultarCarrito() //porque puede estar el carrito cuando seleccione las categorias
    let categoria = e.target.innerText 
    removerActiveDeLaSidebar()
    e.target.classList.add("sidebar-item-active")
    if(categoria === "Todos"){
        renderizarProductos(obtenerProductos())
        return
    }
    let productosFiltrados = obtenerProductos().filter(producto => producto.categoria === categoria)
    renderizarProductos(productosFiltrados)
}

// Función para buscar un producto por nombre (filter porque puede haber varios)
function buscarProducto(nombreProducto) {
    removerActiveDeLaSidebar()
    let cadenaMinuscula = nombreProducto.toLowerCase();
    let productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(cadenaMinuscula));
    return productosEncontrados;
}

function comprar(){
    let carrito = obtenerCarrito()
    let totalCompra = carrito.reduce((total, producto) => total + producto.subtotal, 0)
    let productos = obtenerProductos()
    carrito.forEach(productoEnCarrito => {
        let productoEncontrado = productos.find(productoBuscado => productoBuscado.id === productoEnCarrito.id)
        productoEncontrado.stock -= productoEnCarrito.unidades
    })
    guardarStock(productos)
    alert("Gracias por su compra\nEl total es:" + totalCompra)
    carrito = []
    guardarCarrito(carrito)
    renderizarCarrito(carrito)
}

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
principal()