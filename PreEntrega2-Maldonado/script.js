let categorias = [
    "Ropa",
    "Calzado",
    "Accesorios",
    "Electrónica",
    "Hogar",
    "Electrodomésticos",
    "Cocina",
    "Papelería",
    "Deportes",
    "Fitness",
    "Instrumentos musicales",
    "Vacia"
];
let productos = [
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
let carrito = []


// Función para buscar producto por id (find porque es unico)
function buscarProductoPorId() {
    let idProducto = parseInt(prompt("Ingrese el ID del producto que desea buscar:"));
    let productoEncontrado = productos.find(producto => producto.id === idProducto);
    if (productoEncontrado) {
        alert(`Producto encontrado con ID ${idProducto}:\n${productoEncontrado.nombre} \nCategoria: ${productoEncontrado.categoria}\nDescripcion: ${productoEncontrado.descripcion}\nMarca: ${productoEncontrado.marca}\nPrecio: $${productoEncontrado.precio}\nStock: ${productoEncontrado.stock}`);
    } else {
        alert(`No se encontraron productos con ID ${idProducto}.`);
    }
}

// Función para buscar un producto por nombre (filter porque puede haber varios)
function buscarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto que desea buscar:");
    let cadenaMinuscula = nombreProducto.toLowerCase();
    let productosEncontrados = productos.filter(producto => producto.nombre.toLowerCase().includes(cadenaMinuscula));
    if (productosEncontrados.length > 0) {
        let mensaje =`Productos encontrados que contienen "${nombreProducto}":\nID - Nombre - Categoria - Precio - Stock\n`;
        productosEncontrados.forEach(producto => {
            mensaje = mensaje + `${producto.id} - ${producto.nombre} - ${producto.categoria} - $${producto.precio} - Stock: ${producto.stock}\n`;
        });
        alert(mensaje);
    } else {
        alert(`No se encontraron productos que contengan "${nombreProducto}".`);
    }
}

// Función para filtrar por categoria
function filtrarPorCategoria() {
    let mensaje = "";

    for (let i = 0; i < categorias.length; i++) {
        mensaje += (i + 1) + ". " + categorias[i] + "\n";
    }

    let categoria = parseInt(prompt("Ingrese la categoría del producto:\n" + mensaje ));
    if(categoria > categorias.length || categoria < 1){
        alert("Categoria no valida");
        return;
    }

    let productosFiltrados = productos.filter(producto => producto.categoria === categorias[categoria-1]);
    let mensaje2=""
    if (productosFiltrados.length > 0) {
        mensaje2 += `Productos encontrados que son de la categoría "${categorias[categoria-1]}":\n`;
        mensaje2 += "ID - Nombre - Categoria - Precio - Stock\n";
        productosFiltrados.forEach(producto => {
            mensaje2+=`${producto.id}-${producto.nombre} - ${producto.categoria} - $${producto.precio} - Stock: ${producto.stock}\n`;
        });
        alert(mensaje2);
    } else {
        alert(`No se encontraron productos que son de la categoría "${categorias[categoria-1]}":`);
    }
}
// Función para encontrar el siguiente ID disponible
function proximoID() {
    if (productos.length === 0) {
        return 1;
    }
    //sacado de internet los array los pasa como argumento y busca el maximo
    let maxID = Math.max(...productos.map(producto => producto.id));
    return maxID + 1;
}

// Función para crear un nuevo producto y agregarlo al array de productos
function crearProducto() {
    // Obtener el siguiente ID disponible
    let siguienteID;
    siguienteID = proximoID();

    // Pido los datos del siguiente producto
    let nombre = prompt("Ingrese el nombre del producto:");
    let mensaje = "";

    for (var i = 0; i < categorias.length; i++) {
        mensaje += (i + 1) + ". " + categorias[i] + "\n";
    }
    //No reviso que sea una categoria validad
    let categoria = parseInt(prompt("Ingrese la categoría del producto:\n" + mensaje ));
    let stock = parseInt(prompt("Ingrese el stock del producto:"));
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let descripcion = prompt("Ingrese la descripción del producto:");
    let marca = prompt("Ingrese la marca del producto:");

    // Creo el nuevo producto a agregar al array
    let nuevoProducto = {
        id: siguienteID,
        nombre: nombre,
        categoria: categorias[categoria-1],
        stock: stock,
        precio: precio,
        descripcion: descripcion,
        marca: marca
    };

    // Agrego el nuevo producto al array de productos
    productos.push(nuevoProducto);
    alert("¡Producto creado y agregado correctamente!");
}
//hacer
function removerProducto(){
    let id = Number(prompt("Ingrese el ID del producto a eliminar:"));
    //reviso si esta en el carrito
    if(carrito.some(productoCarrito => productoCarrito.id === id)){
        alert("No se puede eliminar porque esta en el carrito, vacie el carrito primero")
    }else{
        let indiceProductoABorrar = productos.findIndex(producto => producto.id === id);
        if (indiceProductoABorrar !== -1) {
            productos.splice(indiceProductoABorrar, 1);
            alert(`El producto fue eliminado correctamente.`);
        } else {
            alert("No se encontró ningún producto con el ID especificado.");
        }
    }
}

// Función para mostrar los productos en grupos de 5 en un alert
function mostrarProductosEnAlert() {
    let mensaje = "Productos:\n";
    let productosPorAlert = 5;

    for (let i = 0; i < productos.length; i += productosPorAlert) {
        let productosMostrados = productos.slice(i, i + productosPorAlert);
        mensaje += productosMostrados.map((producto, index) => `${producto.id}. ${producto.nombre} - ${producto.categoria} - $${producto.precio} - Stock: ${producto.stock}\n`).join('');
        alert(mensaje);
        mensaje = "Productos:\n";
    }
}

// Funcion para mostrar todos los productos no sirve porque son varios productos
function mostrarProductos() {
    let mensaje = "ID - Producto - Precio - Stock\n";
    productos.forEach((producto) => { 
        mensaje += `${producto.id} - ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}\n`;
    })
    alert(mensaje);
}

// Agregar productos al carrito
//AGREGAR OTRO OBJETO AL CARRITO
//preguntar si ya existe en el carrito y agregar unidades
//pregiuntar si hay stock y agregar unidades
function agregarProductoAlCarrito() {
    let idProducto = parseInt(prompt("Ingrese el ID del producto que desea agregar al carrito:"));  
    let productoEncontrado = productos.find(producto => producto.id === idProducto);    
    if (productoEncontrado) { 
        if(carrito.some(productoCarrito => productoCarrito.id === productoEncontrado.id)){
            let productoExistente = carrito.find(producto => producto.id === productoEncontrado.id)
            if(productoEncontrado.stock >= productoExistente.unidades + 1){
                productoExistente.unidades++
                productoExistente.subtotal = productoExistente.unidades * productoExistente.precio
                alert(`Agregada una unidad más de ${productoEncontrado.nombre} al carrito.\nTiene ${productoExistente.unidades} en el carrito`);
            }else{
                alert(`No hay stock para agregar mas unidades del producto ${productoEncontrado.nombre}.`);
            }
        }else{
            if(productoEncontrado.stock > 0){
                carrito.push({
                    id: productoEncontrado.id,
                    nombre: productoEncontrado.nombre,
                    precio: productoEncontrado.precio,
                    categoria: productoEncontrado.categoria,
                    unidades: 1,
                    subtotal: productoEncontrado.precio
                })
                alert(`Producto ${productoEncontrado.nombre} agregado al carrito.`)
            }else{
                alert(`No hay stock del producto ${productoEncontrado.nombre}.`);
            }
        }
    }else{
        alert("Producto no encontrado.");
        return;
    }
}
function mostrarCarrito(){
    let mensaje = "Carrito:\n";
    let subtotal = 0;
    carrito.forEach((producto,index) => {
        subtotal += producto.subtotal;
        mensaje += `${index+1}. ${producto.nombre} - ${producto.categoria} - $${producto.precio} - Uds: ${producto.unidades} - Subtotal: $${producto.subtotal}\n`;
    });
    alert(mensaje + "\nSubtotal Compra= " + subtotal);
}
function eliminarProductoDelCarrito(){
    if (carrito.length === 0) {
        alert("No hay productos en el carrito");
        return;
    }
    alert("El Carrito es el siguiente:");
    mostrarCarrito();
    let idProducto = parseInt(prompt("Ingrese el numero de producto que desea eliminar del carrito:"));
    if (idProducto > 0 && idProducto <= carrito.length) {
        carrito.splice(idProducto - 1, 1);
        alert("Producto eliminado del carrito.");
        alert("El nuevo Carrito queda:");
        mostrarCarrito();
    }else {
        alert("Producto invalido")
    }
}
//hacerlo con reduce
//reducir stock
function finalizarCompra(){
    let total = carrito.reduce((acumulador, producto) => acumulador + producto.subtotal, 0)
    alert(`Total a pagar: $${total}`);
    //reducir stock
    carrito.forEach(productoCarrito => {
        productos.find(productoBase => productoBase.id === productoCarrito.id).stock -= productoCarrito.unidades;
    })
    carrito = [];
}

function cancelarCompra(){
//    mostrarProductos();
    if(carrito.length === 0){
        alert("No hay productos en el carrito");
        return;
    }else{
        alert("Se va a cancelar el siguiente carrito:")
        mostrarCarrito();
        carrito = [];
        alert("Compra cancelada.");
    }
}

function administracion(){
    let opcion;
    let mensaje = "Ingrese\n1-Agregar Producto\n2-Remover Producto\n0-Volver Atras"
    do {    
        opcion = Number(prompt(mensaje));
        if(opcion == 1){
            crearProducto();
        }else if( opcion == 2){
            removerProducto();
        }
    } while (opcion != 0);
}


let opcion;
do{
    let mensaje = "Ingrese\n1-Listar productos\n2-Buscar producto por id\n3-Buscar producto por nombre\n4-Filtrar por categoria\n5-Agregar producto al carrito\n6-Ver Carrito\n7-Eliminar producto del carrito\n8-Finalizar compra\n9-Cancelar Compra\n10-Administracion\n0-Salir"
    opcion = parseInt(prompt(mensaje));
    if (opcion == 1){
        mostrarProductosEnAlert();
    } else if (opcion == 2){
        buscarProductoPorId();
    } else if (opcion == 3){
        buscarProducto();
    } else if (opcion == 4){
        filtrarPorCategoria();
    } else if (opcion == 5){
        agregarProductoAlCarrito();
    } else if (opcion == 6){
         mostrarCarrito();
    } else if (opcion == 7){
        eliminarProductoDelCarrito();
    } else if (opcion == 8){
        finalizarCompra();
    } else if (opcion == 9){
        cancelarCompra();
    } else if (opcion == 10){
        administracion();
    }
}while(opcion != 0)